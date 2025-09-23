# Regex Data Extraction Tool

A web application that uses Regular Expressions to extract data patterns from text.

## Assignment Requirements

This project implements required data validation patterns:

**Email Addresses** - `user@example.com`, `firstname.lastname@company.co.uk`  
**Phone Numbers** - `(123) 456-7890`, `123-456-7890`, `123.456.7890`  
**URLs** - `https://www.example.com`, `https://subdomain.example.org/page`  
**Currency Amounts** - `$19.99`, `$1,234.56`  
**Time Formats** - `14:30` (24-hour), `2:30 PM` (12-hour)  
**Hashtags** - `#example`, `#ThisIsAHashtag`

## Files

- `index.html` - Main webpage
- `styles.css` - Styling
- `script.js` - JavaScript with regex patterns

## How to Use

1. Open index.html in a web browser
2. Enter text in the input area
3. Click "Extract Data" to find patterns
4. View results showing all matches

## Regular Expressions Used

```javascript
// Email Addresses
/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g

// Phone Numbers
/(?:\(\d{3}\)\s?|\d{3}[-.\s]?)\d{3}[-.\s]?\d{4}/g

// URLs
/https?:\/\/(?:[-\w.])+(?:\:[0-9]+)?(?:\/(?:[\w\/_.])*(?:\?(?:[\w&=%.])*)?(?:\#(?:[\w.])*)?)?/g

// Currency Amounts
/\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g

// Time Formats
/(?:[01]?\d|2[0-3]):[0-5]\d(?:\s?[AaPp][Mm])?|\d{1,2}:[0-5]\d\s?[AaPp][Mm]/g

// Hashtags
/#[A-Za-z0-9_]+/g
```

## Sample Input

```
Contact support@company.com or call (555) 123-4567
Visit https://www.example.com - pricing starts at $29.99
Meeting at 2:30 PM tomorrow #ImportantMeeting
```

## Technologies Used

- HTML5, CSS3, JavaScript
- Regular Expressions for pattern matching
- Responsive web design

---
*ALU Full Stack Development Assignment*
