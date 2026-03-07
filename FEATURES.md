# Features

## Current
- Budget inputs: Income, Rent, Food, Transport, Entertainment
- Results: Total Expenses, Remaining, Savings Rate
- Month/Year picker to track budget per month
- Save button — stores budget data in localStorage keyed by `year-month`
- Full dark mode support across all components

## Planned
### Google OAuth + Google Drive Storage
- Replace localStorage with Google Drive per-user storage
- User signs in with their own Google account
- Budget data saved as JSON in the user's own Google Drive
- Tech: NextAuth.js (Google provider) + `googleapis` npm package
- Requires one-time Google Cloud Console setup by the developer
- No database needed — each user's data lives in their own Drive
