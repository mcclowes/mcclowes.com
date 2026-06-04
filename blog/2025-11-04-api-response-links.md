---
title: 'Adding a links field to API responses'
authors: mcclowes
tags: [api, design, engineering]
enableComments: true
---

We added a `links` field to our API response objects this week. Small change, and I'd put it off for a while because it felt like ceremony. It isn't.

<!--truncate-->

The problem it solves is quiet. A client fetches an invoice, gets back the data, and then has to know — out of band — how to build the URL to download the PDF, where to fetch the customer, how to page to the next batch. That knowledge lives in our docs and in the client's head. Every one of those is a hardcoded path waiting to break the next time we restructure routing.

So now each response carries the routes that relate to it:

```json
{
  "id": "inv_123",
  "amount": 4200,
  "status": "paid",
  "links": {
    "self": "/v1/invoices/inv_123",
    "pdf": "/v1/invoices/inv_123/pdf",
    "customer": "/v1/customers/cus_456"
  }
}
```

The client stops constructing URLs and starts following them. When we move an endpoint, the link moves with it and nothing downstream notices.

A few things kept it honest:

- **Relative paths, not absolute.** The client already knows the host. Baking it in just creates a second thing to get wrong across environments.
- **Only the links that apply.** A draft invoice has no `pdf` link, so the client can read the absence as "not ready yet" instead of fetching a 404 to find out.
- **Stable keys, movable values.** `pdf` is the contract; the path behind it isn't. That's the whole point — the key is what clients couple to.

It's not full HATEOAS and I'm not pretending it is. No one's discovering the entire API by crawling links. But for the handful of routes a client actually reaches for after loading a resource, handing them over in the payload beats making everyone reverse-engineer them from the docs.

Cheap to add, and it quietly deletes a class of "the URL changed" bugs. Worth doing sooner than I did.
