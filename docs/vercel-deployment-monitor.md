# Vercel Deployment Monitor

This repository includes an automated monitoring system that creates GitHub issues when Vercel production deployments fail.

## How It Works

The system consists of a GitHub Actions workflow (`vercel-deployment-monitor.yml`) that:

1. **Runs every 5 minutes** via cron schedule
2. **Queries Vercel API** to check recent deployments
3. **Identifies failed deployments** in the last 24 hours
4. **Creates GitHub issues** automatically with detailed information
5. **Prevents duplicates** by checking for existing issues

## Setup Instructions

### 1. Create a Vercel API Token

1. Go to [Vercel Account Settings](https://vercel.com/account/tokens)
2. Click "Create Token"
3. Give it a descriptive name (e.g., "GitHub Actions Deployment Monitor")
4. Set appropriate scope (recommended: read access to deployments)
5. Copy the generated token

### 2. Add the Token as a GitHub Secret

1. Go to your repository settings
2. Navigate to "Secrets and variables" → "Actions"
3. Click "New repository secret"
4. Name: `VERCEL_TOKEN`
5. Value: Paste your Vercel API token
6. Click "Add secret"

### 3. Verify the Setup

1. Go to the "Actions" tab in your repository
2. Find the "Vercel Deployment Monitor" workflow
3. Click "Run workflow" to test it manually
4. Check the logs to ensure it's working correctly

## What Happens When a Deployment Fails

When a Vercel deployment fails, the system will:

1. **Create a GitHub issue** with:
   - Deployment ID and URL
   - Branch and commit information
   - Error details and timestamps
   - Link to Vercel dashboard
   - Checklist of next steps

2. **Add appropriate labels**:
   - `deployment-failure`
   - `bug`
   - `vercel`

3. **Prevent duplicate issues** for the same deployment

## Issue Template

Failed deployment issues will include:

```markdown
## Deployment Failure Details

**Deployment ID:** abc123
**URL:** https://your-site.vercel.app
**Branch:** main
**Commit:** abc123def456
**Created:** 2024-01-01 12:00:00
**State:** ERROR

**Vercel Dashboard:** https://vercel.com/your-team/your-project/deployments/abc123
**Commit Link:** https://github.com/owner/repo/commit/abc123def456

## Error Information

**Error:** Build failed during compilation

## Next Steps

- [ ] Check the Vercel dashboard for detailed build logs
- [ ] Review the failed commit for potential issues
- [ ] Fix the underlying issue
- [ ] Trigger a new deployment
```

## Monitoring Details

- **Frequency**: Every 5 minutes
- **Lookback period**: 24 hours
- **API endpoint**: Vercel Deployments API
- **Deployment states monitored**: ERROR, READY ERROR

## Troubleshooting

### Common Issues

1. **"VERCEL_TOKEN not found"**
   - Ensure you've added the VERCEL_TOKEN secret to your repository

2. **"Vercel API request failed"**
   - Check that your token has the correct permissions
   - Verify the project name matches your Vercel project

3. **"Monitor Error" issues being created**
   - Check the workflow logs for detailed error information
   - Verify API permissions and project settings

### Manual Testing

You can manually trigger the workflow:

1. Go to Actions → Vercel Deployment Monitor
2. Click "Run workflow"
3. Check the logs for any errors

## Security Notes

- The Vercel token is stored securely as a GitHub secret
- The workflow only has read access to deployments
- No sensitive information is exposed in issue descriptions
- The workflow runs in GitHub's secure environment

## Customization

To modify the monitoring behavior:

1. **Change frequency**: Edit the cron schedule in the workflow
2. **Adjust lookback period**: Modify the `oneDayAgo` calculation
3. **Customize issue template**: Update the issue creation logic
4. **Add notifications**: Extend the workflow to send additional alerts

## Support

If you encounter issues with the deployment monitor:

1. Check the workflow logs in the Actions tab
2. Verify your Vercel token permissions
3. Ensure the project ID matches your Vercel project
4. Create a manual issue if the monitor itself fails
