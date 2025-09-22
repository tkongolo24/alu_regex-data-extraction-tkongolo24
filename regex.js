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

// Sample test data 
const testData = {
    basic: `Contact Information:
Email: john.smith@company.com, support@techcorp.org
Phone: (555) 123-4567, 800-HELP-NOW
Website: https://www.example.com
Price: $29.99
Meeting time: 2:30 PM
Follow us: #CustomerService`,

    comprehensive: `Customer Database Export:
John Doe - john.doe@email.com - (555) 987-6543
Website: https://www.customer-portal.com/dashboard
Meeting scheduled for 2:30 PM today, call backup at 123-456-7890
Social Media: Follow us #TechUpdate #CustomerService
Pricing: Basic plan $19.99, Premium $99.99, Enterprise $1,299.00
Support hours: 9:00 AM to 6:00 PM EST`,

    mixed: `Business Report - Q3 2024:
Contact sales@business.co.uk for enterprise solutions
Support available 9:00 AM - 6:00 PM EST, weekend hours 14:30-18:00
Main site: https://portal.business.com/login
Backup contact: (212) 555-0123 or 555.CALL.NOW
Revenue: $45,678.90 this quarter, $123,456.78 projected
Campaign hashtags: #Q3Results #BusinessGrowth #Innovation
Customer service: info@support.net available 24/7`
};

// DOM Elements
const inputText = document.getElementById('inputText');
const extractBtn = document.getElementById('extractBtn');
const sampleBtn = document.getElementById('sampleBtn');
const clearBtn = document.getElementById('clearBtn');
const resultsSection = document.getElementById('results-section');
const summaryStats = document.getElementById('summary-stats');
const patternResults = document.getElementById('pattern-results');

// Event Listeners
extractBtn.addEventListener('click', performExtraction);
sampleBtn.addEventListener('click', loadSampleData);
clearBtn.addEventListener('click', clearAllData);

// Keyboard shortcuts
inputText.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'Enter') {
        performExtraction();
    }
});

// Main extraction function
function performExtraction() {
    const textInput = inputText.value.trim();
    
    if (!textInput) {
        alert('Please enter some text to analyze');
        inputText.focus();
        return;
    }

    const results = {};
    let totalMatches = 0;
    let patternsWithMatches = 0;

    // Process each pattern
    Object.keys(dataPatterns).forEach(patternKey => {
        const pattern = dataPatterns[patternKey];
        const matches = textInput.match(pattern.regex) || [];
        
        // Remove duplicate matches
        const uniqueMatches = [...new Set(matches)];
        
        results[patternKey] = {
            ...pattern,
            matches: uniqueMatches,
            totalFound: matches.length,
            uniqueCount: uniqueMatches.length
        };
        
        totalMatches += matches.length;
        if (matches.length > 0) {
            patternsWithMatches++;
        }
    });
    
     // Display the results
    displayExtractionResults(results, {
        totalMatches,
        patternsWithMatches,
        textLength: textInput.length,
        totalPatterns: Object.keys(dataPatterns).length
    });
}

/ Display results function
function displayExtractionResults(results, stats) {
    // Show results section
    resultsSection.style.display = 'block';
    
    // Update summary statistics
    summaryStats.innerHTML = `
        <div class="stat-item">
            <span class="stat-number">${stats.totalMatches}</span>
            <span class="stat-label">Total Matches</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">${stats.patternsWithMatches}</span>
            <span class="stat-label">Patterns Found</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">${stats.textLength}</span>
            <span class="stat-label">Characters</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">${stats.totalPatterns}</span>
            <span class="stat-label">Patterns Searched</span>
        </div>
    `;

    
    // Generate pattern result cards
    let resultsHTML = '';
    
    Object.keys(results).forEach(key => {
        const result = results[key];
        const hasMatches = result.uniqueCount > 0;
        
        const matchesHTML = hasMatches 
            ? result.matches.map(match => 
                `<div class="match-item">${escapeHTML(match)}</div>`
              ).join('')
            : '<div class="no-matches">No matches found</div>';

        resultsHTML += `
            <div class="pattern-card">
                <div class="pattern-header">
                    <span class="pattern-title">${result.icon} ${result.name}</span>
                    <span class="match-count">${result.uniqueCount}</span>
                </div>
                <div class="pattern-body">
                    <div class="matches-list">
                        ${matchesHTML}
                    </div>
                    <div class="regex-info">
                        <div class="regex-pattern">RegEx: ${result.regex.toString()}</div>
                    </div>
                </div>
            </div>
        `;
    });