import React, { useState } from 'react';

const Pastors = () => {
  // State for toggling "Show More" content
  const [showMoreRathnam, setShowMoreRathnam] = useState(false);
  const [showMoreSamuel, setShowMoreSamuel] = useState(false);

  const toggleShowMoreRathnam = () => setShowMoreRathnam(!showMoreRathnam);
  const toggleShowMoreSamuel = () => setShowMoreSamuel(!showMoreSamuel);

  return (
    <div className="pastors-container">
      <div className="pastor-card">
        <img
          src={process.env.PUBLIC_URL + '/HomePagePics/Rathnam.jpg'}
          alt="Pastor B N Rathnam"
          className="pastor-image"
        />
        <div className="pastor-content">
          <h2>Pastor B N Rathnam</h2>
          <p>
            Pastor B N Rathnam was born in the village of Mangalaguntapalem, Narsapur, West Godavari. 
            He grew up with two elder brothers, one elder sister, and one younger sister. His parents, 
            Benjamin and Kanthamma, loved their children deeply. However, from a young age, Pastor Rathnam
            suffered from a severe physical illness and frequent seizures.
            {showMoreRathnam && (
              <>
                <br />
                During his 8th grade, his health worsened, and the school authorities could no longer care for him due to the regular seizures. They handed him back to his parents, unsure of how to help. In this moment of desperation, his mother prayed with a heart full of faith, committing him to the Lord: "If my son survives and is healed, I will dedicate him to You." God miraculously answered her prayer, healing him completely.

                He then traveled to Armoor, nearly 700 kilometers from his hometown, with his cousins to continue his studies. Despite financial struggles, God's grace enabled him to complete his Intermediate education and pursue theological studies. Pastor Rathnam Garu felt called to serve the Lord wholeheartedly.

                In 1995, God blessed him with a life partner, Yesumani, a woman of great faith. Her parents, Pastors Ashirwadam and Esther, were also committed to ministry. Together, Pastor B N Rathnam and Yesumani embraced God's call, founding Golgotha Ministries in 1997 in Armoor. Since then, the ministry has grown, with five services each Sunday and a congregation of over 350 people gathering to worship.

                God blessed them with two children, Serena Beulah and Samuel Mories. Serena Beulah is married to Pastor Sampath Paul, the son of Rev. Das Yellam and Suguna Yellam, who serve in Kamareddy. 

                Samuel Mories serves as an associate pastor at Golgotha Ministries, continuing the mission to spread God’s Word.

                Inspired by Matthew 9:37, which says, "The harvest is plentiful, but the workers are few," Golgotha Ministries is dedicated to building 12 new churches, bringing the message of Christ to many more. The journey so far is a testament to how, with faith, God can transform one life to impact thousands. As Isaiah 60:22 declares, "The least of you will become a thousand, the smallest a mighty nation. I am the Lord; in its time I will do this swiftly."

                We ask for your prayers as we continue in faith, trusting that the Lord will guide us to fulfill His purpose.
              </>
            )}
          </p>
          <button className="show-more-btn" onClick={toggleShowMoreRathnam}>
            {showMoreRathnam ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>

      <div className="pastor-card">
        <img
          src={process.env.PUBLIC_URL + '/HomePagePics/Samuel Mories.JPG'}
          alt="Pastor Samuel Mories Bandela"
          className="pastor-image"
        />
        <div className="pastor-content">
          <h2>Pastor Samuel Mories Bandela</h2>
          <p>
            Pastor Samuel Mories Bandela, the son of Pastor Rathnam and Yesumani, has been dedicated 
            to God’s service from birth. His parents, who faithfully serve the Lord, always reminded 
            Samuel that he was a child of God, dedicated to Him from his mother’s womb.
            {showMoreSamuel && (
              <>
                <br />
                Samuel's early years were marked by severe health struggles, as he suffered from pneumonia throughout his childhood. However, in God’s amazing grace, Samuel was miraculously healed, setting the stage for a life dedicated to ministry.

                At the age of 17, Samuel answered God's calling and stepped into ministry. Although his parents had dedicated him to God's work, it was his personal decision to surrender his life to Jesus Christ. From that moment, God placed a great burden on his heart for the younger generation, alongside the church ministry.

                One pivotal moment in Samuel’s life came through the story of Onesimus in Philemon 1:11: "Formerly he was useless to you, but now he has become useful both to you and to me." God used this passage to inspire Samuel to help transform young lives. Many young people today face overwhelming struggles, and some even contemplate suicide due to life’s burdens. Samuel’s heart for them led him to start the *Empty to Excellence* mission, focusing on three pillars: Christ, Character, and Career. 

                Through this mission, God has used Samuel to reach thousands of young people, providing hope and guiding them towards a purposeful life in Christ. The testimonies of transformation are numerous, as many young lives have been renewed by the power of the gospel.

                In 2023, God expanded Samuel’s reach by sending him on a mission trip to Dubai, where he ministered to people from various nations. His ministry continues to grow across the Telugu states in India, where God is using him mightily to impact lives and bring the light of Christ to many.

                Pastor Samuel’s life is a powerful testimony of God's grace, healing, and faithfulness. His passion for Christ and the younger generation continues to shine brightly, as he faithfully serves the Lord in all that he does.
              </>
            )}
          </p>
          <button className="show-more-btn" onClick={toggleShowMoreSamuel}>
            {showMoreSamuel ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pastors;
