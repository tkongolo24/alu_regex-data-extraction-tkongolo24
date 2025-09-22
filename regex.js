// Regular Expression Patterns for Data Extraction

const dataPatterns = {
    emails: {
        regex: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g,
        name: "Email Addresses",
        icon: "📧"
    },
    phones: {
        regex: /(?:\(\d{3}\)\s?|\d{3}[-.\s]?)\d{3}[-.\s]?\d{4}/g,
        name: "Phone Numbers",
        icon: "📞"
    },
    urls: {
        regex: /https?:\/\/(?:[-\w.])+(?:\:[0-9]+)?(?:\/(?:[\w\/_.])*(?:\?(?:[\w&=%.])*)?(?:\#(?:[\w.])*)?)?/g,
        name: "URLs",
        icon: "🌐"
    },
    currency: {
        regex: /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g,
        name: "Currency Amounts",
        icon: "💰"
    },
    times: {
        regex: /(?:[01]?\d|2[0-3]):[0-5]\d(?:\s?[AaPp][Mm])?|\d{1,2}:[0-5]\d\s?[AaPp][Mm]/g,
        name: "Time Formats",
        icon: "⏰"
    },
    hashtags: {
        regex: /#[A-Za-z0-9_]+/g,
        name: "Hashtags",
        icon: "#️⃣"
    }
};