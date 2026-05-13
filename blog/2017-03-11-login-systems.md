---
title: Clarity within modern login and sign up systems
authors: mcclowes
tags: [design, product]
enableComments: true
---

Nit-picking Medium's approach to login and sign up.

<!--truncate-->

We're spoiled for choice when it comes to how we sign up to services.

If you're logging in with an email address, the traditional password security measures is increasingly being supplemented with Passwordless login approaches, or even Touch ID.

Can't be bothered with spending a minute filling in your personal details YET AGAIN? Meet Social Login. From a user's perspective this saves time when first setting up an account, and it usually enables more functionality. From a provider's perspective, it also gives you access to more user information about your users with which to provide a better, more customised experience (hopefully, rather than the provider harvesting user data for evil).

The point is, the way login to services has changed over the years. However, login is not always as simple a process as it should be. As an example, let's look at the Medium iOS app's sign up and login procedures.

![The Medium sign up/login screen on iOS](/img/posts/login-systems/1_7VowoFhbB9zaVIORBzktHg.webp)

_Figure 1 — The Medium sign up/login screen on iOS_

### Act 1: Signing up

Sign in ≠ Sign up. Accurately describing the specifics of how Social Login systems work can be fiddly, and instructions are often ambiguous. For example, Fig. 1 immediately makes me uneasy as a user.

A possible user train of thought:

- Right, I want to make an account.
- Huh, I must be on the login screen, all the buttons say "Sign in", and I don't have an account to sign in with yet.
- _Looks all around the edges of the screen for something to the effect of "Don't already have an account? Sign up"_
- There are no other options, I guess the sign in process will let me make an account?

As a new user looking to create an account none of these options accurately describe what I'm looking to do, and even when I do progress to the next stage, I'm not confident I'm where I need to be.

On the very next page the language changes (see Fig. 2) and Medium's designers clearly felt the need to clarify that if you don't yet have an account, they will create one for you, and if you do you will be logged in. Why not be explicit about this on the first page?

Also… "No password field? That doesn't feel very secure! Will I be asked to make a password on the next page? If so the button saying Sign Up is kinda inaccurate". You should probably warn your users upfront when you're using Passwordless.

![The Medium iOS app email Sign Up/Sign In](/img/posts/login-systems/1_50ffcdNuir2TAAvUcg3nMg.webp)

_Figure 2 — The Medium iOS app email Sign Up/Sign In_

### Act 2: What email did I sign up with?

Once you've made an account by signing up with email, surely things get simpler from here?

The "Sign in / Sign up" text is pretty explicit about the button's functionality, so little room for confusion there. But is it appropriate to combine these functions?

If I type in the wrong email address or spell my login email wrong I do not want to create a new account!

Whilst this is not a problem for most users, anyone who uses a business email to sign up for work-related products and services will probably be familiar with at least fleeting doubt over what email they used whilst logging into something that could be work or personal.

I'd be interested to know how many new accounts have almost been set up this way.

Luckily, the account isn't actually created until you click a link in the email, which expires after 15 minutes (making the "Sign in / Sign up" button inaccurate). The 15 minutes expiration rule seems telling that this IS an issue.

### Act 3: What social account did I sign up with?

Similar issues apply when signing up with Social Login. Personally, I tend to prefer logging in with Facebook, particularly if the services has a social or sharing element. However, I will use Twitter login for any service that I want to give a little less personal information to.

So when confronted with Figure 1 I would normally instinctively opt for the Facebook login option. But a few days ago when logging in I realised I had no recollection of whether I created my account using Facebook, Twitter or just email; sure, Facebook is my go to, but Twitter is first on the list so I may have just used that as that's presumably the approach Medium would most like you to use, or I might have just used my business email address.

The permissions flow within Twitter and Facebook often fails to make it clear whether you've already authorised Medium to use your account or whether you're about to login for the first time, so just trying one of the options isn't ideal.

In the end I selected "Sign in with Facebook" only to change my mind when Medium asked for permission to use the Facebook account logged in on my phone. I then decided I probably did make my account with Facebook, so tapped "Sign in with Facebook" again and was greeted with Figure 3. In the end I had to dive into my phone's settings to re-enable Facebook login.

![when you refuse Medium access to your Facebook account](/img/posts/login-systems/1_vJ_uIRQTE4hBZvQPDKZA3A.webp)

_Figure 3 — when you refuse Medium access to your Facebook account_

### Act 4: It didn't matter either way

As I found when writing this piece, I could have tried logging in with Twitter, Facebook and email, and all of them would have worked!

I initially signed up with an email address, only to link my Facebook and Twitter accounts as well. So all the options that lead to my confusion made little difference in the end.

### Conclusion

This might seem overly critical, but when dealing with sign up and login, processes that revolve around user trust and the handling of sensitive personal data there is no room for confusion or doubt.

Users engage with so many platforms on a daily basis that it's important to make every login and sign up process as clear and swift as possible. There will always be a user that doesn't remember which email or Social Login they created their account with 12 months ago or gets confused over ambiguous wording.

If you think you've created a simple, foolproof login and sign up flow, it's probably worth double checking. And then checking again.
