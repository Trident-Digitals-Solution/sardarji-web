import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Products</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/web.jpg'
              initial="Trident Digitals is a techno-geek team that is devoted and follows business ethics who work along to deliver agile web-based interactive and pragmatic solutions."
              text="The website is not any longer to assemble information. However, it' s the primary purpose of contact between the clients and your business. As a web designing firm, we make sure that the web designs solutions that we provide you with solutions that do not get outdated with time and stay forever. Our team of coming up with specialists would lookout to incorporate dynamic graphics, responsive interface, authoring standardized codes, proprietary software systems, and computer program optimization to keep your website not just visually appealing but also relevant to your client's need and your business. However, additionally functionally satisfying to fulfill all of your necessities."
              label='Web Developement'
              path='/services'
            />
            <CardItem
              src='images/mobile.jpg'
              initial="The mobile apps created by Trident Digitals are dynamic and may be custom-made to numerous native and cross platforms"
              text='Our plan for mobile application development is to produce a dynamic and cross-platform mobile application. The mobile apps created by Trident Digitals are dynamic and may be custom-made to numerous native and cross platforms. We take huge pride in spoken language that the mobile apps developed at Trident Digitals are strong, agile, and on-par with business standards. We cater to your mobile app demand with regular updates and maintenance to make them reliable and trouble-free.'
              label='Mobile Applications'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/seo.png'
              initial="We're a centered SEO Services Company that gives you the best SEO strategy to assist you to be high in the competition. It's much easier to double your business by doubling your conversion rate than by doubling your traffic."
              text="We believe that On-page SEO is incredibly crucial to your website. However, on-page SEO doesn't finish with what's visible to the user, however, additionally, it includes the title-tags, Meta descriptions, H1 tags, image optimization, mobile-view optimization, and a lot more which we take care of at Trident Digitals. Also, once search engines check up on an internet page, it considers a variety of things. How well it's able to analyze the page contents could be a sensitive indicator of how well your page is optimized. However, on-page SEO doesn't finish with what's visible to the user, however, additionally, it includes title-tags, Meta descriptions, H1 tags, image optimization, mobile-view optimization, and a lot more which we take care of at Trident Digitals. 
              "
              label='SEO'
              path='/services'
            />
            {/* <CardItem
              src='images/digitalm.jpg'
              initial="Be detected be seen with Trident Digitals, the interactive user interface, and engagement that we offer a lot of visibility to your business with complete presence across the digital world."
              text='Gone are the days when we used social media platforms in our free time or just to stay connected to our loved ones. Today social media networks like Facebook, YouTube, Twitter, Instagram, Pinterest, Tumblr, Tinder, OLX, and others have evolved to become the most sought-after global platforms for making your brand reach the masses. The social media marketing experts at Trident Digitals would help you make engaging interactions with your target customers and help to build your brand.'
              label='Digital Marketing'
              path='/products'
            /> */}
            <CardItem
              src='images/socialm.jpg'
              initial="Be detected be seen with Trident Digitals, the interactive user interface, and engagement that we offer a lot of visibility to your business with complete presence across the digital world."
              text='Gone are the days when we used social media platforms in our free time or just to stay connected to our loved ones. Today social media networks like Facebook, YouTube, Twitter, Instagram, Pinterest, Tumblr, Tinder, OLX, and others have evolved to become the most sought-after global platforms for making your brand reach the masses. The social media marketing experts at Trident Digitals would help you make engaging interactions with your target customers and help to build your brand.'
              label='Social Media'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/videom.jpg'
              initial="At Trident Digitals, we support creative ideas and let your imagination fly, and transform your imagination into reality. Design an amazing and attractive Videos that your customer will remember "
              text='At Trident Digitals, we provide the perfect solutions for your business by properly formulating the right way to engage your audience by curating the right video mix for your social media and website. Video marketing is very essential in today’s time to connect with your potential and existing customers either emotionally and it is also proved through the study that around 80% more retention rate is observed when business markets their products/services through video marketing. While it reduces to less than 40% for information that is seen through eyes or heard through ears. It’s very essential to improve for SEO purposes as well, it has proved again and again that the content is king.
              '
              label='Video Marketing'
              path='/sign-up'
            />
            <CardItem
              src='images/contentm.jpg'
              initial="Involve your potential customers in your business with interactive and engaging content curated by our experts at Trident Digitals, and make them stay connected with your products."
              text="We, at Trident Digitals, perceive that content is the king once it involves digital media selling. The standard and amount of content are crucial to obtaining noticed by the Google bots crawl and play a vital role in the ranking of a website. Each content tells the reader a story, and it' s necessary to make your content interactive enough to make sure that your client stays longer on your website and navigates more on your website to help him stay and make it easy for the lead to get converted into a client. The visitors want answers for his or her confusing queries and a quick response, which is the ultimate goal of any successful content. We provide the right contents required by your shoppers, strictly jutting to their business aspects and views."
              label='Content Marketing'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
