import React, { useState } from 'react';
 
const faqs = [
  {
    question: 'Who am I?',
    answer: 'You are created in the image of God (Genesis 1:27), with unique purpose and value. In Christ, you are a new creation (2 Corinthians 5:17), a child of God (John 1:12), and called to be part of His family.'
  },
  {
    question: 'What is life purpose?',
    answer: 'Your purpose is to glorify God (Isaiah 43:7) and live out His will for your life. This includes loving God with all your heart (Matthew 22:37), loving others (Matthew 22:39), and fulfilling the unique calling He has for you (Ephesians 2:10).'
  },
  {
    question: 'What is a relationship and true relationship?',
    answer: 'Relationships are designed by God to reflect His love (John 15:12-13). True relationships honor God’s principles of purity, commitment, and selflessness (1 Corinthians 13:4-7). A relationship should bring you closer to God and reflect His love to others.'
  },
  {
    question: 'Who is Jesus?',
    answer: 'Jesus is the Son of God (John 3:16), the Savior who came to die for the sins of the world (John 1:29). He is fully God and fully man (John 1:14), and through His death and resurrection, offers salvation and eternal life to those who believe in Him (Romans 10:9-10).'
  },
  {
    question: 'How can I know God’s will for my life?',
    answer: 'God\'s will is revealed through His Word (Psalm 119:105) and prayer (Philippians 4:6-7). As you seek Him, trust that He will guide your steps (Proverbs 3:5-6). His will is for you to grow in holiness (1 Thessalonians 4:3) and be conformed to the image of Christ (Romans 8:29).'
  },
  {
    question: 'How do I handle peer pressure as a Christian?',
    answer: 'Stand firm in your faith (Ephesians 6:13), remembering that God has called you to be set apart (Romans 12:2). When you face pressure, seek God’s strength (Philippians 4:13) and surround yourself with godly friends who encourage you to live for Christ (Proverbs 27:17).'
  },
  {
    question: 'How can I serve God as a young person?',
    answer: 'You can serve God by using your gifts to build up the church (1 Corinthians 12:4-7), caring for others (Galatians 6:10), and sharing the Gospel with those around you (Mark 16:15). No one is too young to make an impact for God’s kingdom (Jeremiah 1:7).'
  },
  {
    question: 'How do I overcome doubts about my faith?',
    answer: 'Doubts are a normal part of faith, but you can overcome them by seeking God in His Word (Romans 10:17), praying for wisdom (James 1:5-6), and trusting in His promises (Hebrews 11:1). Surround yourself with a community of believers who can support and encourage you (Hebrews 10:24-25).'
  },
  {
    question: 'How do I build a strong relationship with God?',
    answer: 'Building a strong relationship with God starts with spending time in His Word (Psalm 119:11), prayer (Philippians 4:6), and worship (John 4:23). Consistently seek Him with all your heart (Jeremiah 29:13), and He will draw near to you (James 4:8).'
  },
  {
    question: 'Why is the Bible important for my life?',
    answer: 'The Bible is God’s living Word (Hebrews 4:12), providing guidance, wisdom, and truth (2 Timothy 3:16-17). It helps you know God’s character, His will, and how to live a life that pleases Him (Psalm 119:105).'
  }
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h3>{faq.question}</h3>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </div>
          <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
