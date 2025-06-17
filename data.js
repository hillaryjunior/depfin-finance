export const depfinFaqs = [
  {
    id: 1,
    question: 'How much money can I borrow  at depfin Finance?',
    answer:
      'At Depfin Finance you can get a loan from R30 000 to R10 Million. Apply for a loan today!',
  },
  {
    id: 8,
    question: 'When do I get my money, once I have been approved for a loan?',
    answer: 'You will receive the money within 1hrs or 24hrs.',
  },
  {
    id: 9,
    question: 'I already have a Loan; can I take out another loan?',
    answer:
      'Yes you can apply for a second loan, our friendly consultants will perform the necessary credit checks and calculate your affordability.',
  },
  {
    id: 2,
    question: 'Can I use my bank statement as proof of residence?',
    answer:
      'Yes, as long as the bank statement reflects the client’s initials, surname and full current address.',
  },
  {
    id: 3,
    question: 'What is the interest rate?',
    answer:
      'All loans at Depfin Finance are calculated at a 6% interest rate. Apply for a loan today!',
  },
  {
    id: 4,
    question: 'What is the repayment method?',
    answer:
      'At Depfin Finance you can choose your method of repayment. Apply for a loan today!',
  },
  {
    id: 5,
    question: 'I have just started a new job, can I apply for a loan?',
    answer:
      'No, you would need to be permanently employed for minimum 3 months.',
  },
  {
    id: 5,
    question: 'What if I am ‘blacklisted’ can I apply for a loan?',
    answer:
      'Yes you can apply, our friendly consultants will perform the necessary credit checks and calculate your affordability.',
  },
  {
    id: 10,
    question: 'How can I check my loan balance amount?',
    answer:
      'You can contact our customer care branch in order to give you a loan statement.',
  },
]

export const blogsData = {}

export const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is required to apply for a personal loan at depfin finance?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "<p>
                      <li>• You need to be between the ages of 21 and 60</li>
                      <li>• You need to be earning at least R4500 per month</li>
                      <li>
                        • You must be permanently employed for more than 3
                        months
                      </li>
                      <li>• Your salary must be paid into your bank account</li>
                      <li>
                        • We can also assist anyone under debt review or
                        administration
                      </li>
                    </p>"
    }
  },{
    "@type": "Question",
    "name": "What document do I need to apply for a personal loan?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "<p>
                      <li>•	You need a valid identity Document (ID)</li>
                      <li>•	You need 3 months latest pay slips</li>
                      <li>
                       •	You need 3 months latest bank statements
                      </li>
                      <li>•	You need proof of residence, not older than 3 months</li>
                     
                    </p>"
    }
  },{
    "@type": "Question",
    "name": "When do I get my money, once I have been approved for a loan?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You will receive the money within 1hrs or 24hrs."
    }
  },{
    "@type": "Question",
    "name": "How much money can I borrow  at depfin Finance?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "At Depfin Finance you can get a loan from R30 000 to R10 Million. Apply for a loan today!"
    }
  },{
    "@type": "Question",
    "name": "What is the interest rate?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "All loans at Depfin Finance are calculated at a 6% interest rate. Apply for a loan today!"
    }
  }]
}`
