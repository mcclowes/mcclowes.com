#!/bin/bash

# Vercel Deployment Monitor Test Script
# This script helps test the deployment monitoring functionality

set -e

echo "🚀 Testing Vercel Deployment Monitor Setup"
echo "=========================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    local status=$1
    local message=$2
    case $status in
        "success")
            echo -e "${GREEN}✓${NC} $message"
            ;;
        "warning")
            echo -e "${YELLOW}⚠${NC} $message"
            ;;
        "error")
            echo -e "${RED}✗${NC} $message"
            ;;
        "info")
            echo -e "ℹ $message"
            ;;
    esac
}

# Check if we're in the right directory
if [ ! -f ".github/workflows/vercel-deployment-monitor.yml" ]; then
    print_status "error" "vercel-deployment-monitor.yml not found. Please run this script from the repository root."
    exit 1
fi

print_status "success" "Found vercel-deployment-monitor.yml workflow file"

# Check if GitHub CLI is available
if command -v gh &> /dev/null; then
    print_status "success" "GitHub CLI is available"
    
    # Check if authenticated
    if gh auth status &> /dev/null; then
        print_status "success" "GitHub CLI is authenticated"
        
        # Check if VERCEL_TOKEN secret exists
        if gh secret list | grep -q "VERCEL_TOKEN"; then
            print_status "success" "VERCEL_TOKEN secret is configured"
        else
            print_status "warning" "VERCEL_TOKEN secret not found"
            echo "  To add the secret, run: gh secret set VERCEL_TOKEN"
        fi
    else
        print_status "warning" "GitHub CLI is not authenticated"
        echo "  To authenticate, run: gh auth login"
    fi
else
    print_status "info" "GitHub CLI not available - manual setup required"
    echo "  Install GitHub CLI: https://cli.github.com/"
fi

# Check if Node.js is available (for local testing)
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    print_status "success" "Node.js is available ($NODE_VERSION)"
else
    print_status "warning" "Node.js not found - required for local testing"
fi

# Validate the workflow file syntax
print_status "info" "Validating workflow file syntax..."

if command -v yamllint &> /dev/null; then
    if yamllint .github/workflows/vercel-deployment-monitor.yml; then
        print_status "success" "Workflow YAML syntax is valid"
    else
        print_status "error" "Workflow YAML syntax has issues"
    fi
else
    print_status "warning" "yamllint not available - skipping syntax validation"
    echo "  Install yamllint: pip install yamllint"
fi

# Check if documentation exists
if [ -f "docs/vercel-deployment-monitor.md" ]; then
    print_status "success" "Documentation file exists"
else
    print_status "warning" "Documentation file not found"
fi

echo ""
print_status "info" "Setup Summary:"
echo "  1. Workflow file: ✓ Present"
echo "  2. VERCEL_TOKEN secret: $(gh secret list | grep -q "VERCEL_TOKEN" && echo "✓ Configured" || echo "⚠ Missing")"
echo "  3. Documentation: $([ -f "docs/vercel-deployment-monitor.md" ] && echo "✓ Present" || echo "⚠ Missing")"

echo ""
print_status "info" "Next Steps:"
echo "  1. Ensure VERCEL_TOKEN secret is set in GitHub repository settings"
echo "  2. Test the workflow manually in GitHub Actions"
echo "  3. Monitor the Actions tab for automated runs"
echo "  4. Check for any automatically created issues"

echo ""
print_status "info" "Manual Testing:"
echo "  • Go to Actions → Vercel Deployment Monitor → Run workflow"
echo "  • Check the logs for any errors"
echo "  • Verify no issues are created if deployments are successful"

echo ""
print_status "success" "Test script completed!"