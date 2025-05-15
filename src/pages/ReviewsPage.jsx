import React, { useState } from 'react';
import { StarIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

const reviews = [
  {
    name: 'Asma Siddique',
    location: ' Ontario - Canada',
    stars: 5,
    text: "Package received. Both Sherwanis & waist coat fits perfectly. We liked the quality & stitching. We will definitely refer you to  our friends. Thank you so much! ",
    img: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/can.png',
  },
  {
    name: 'Rabbeya Khaled',
    location: ' USA',
    stars: 5,
    text: "Recently placed an order at dulha house and I am more than satisfied with their service! They responded very quickly and were able to get the order ready before time. Reasonable prices, Excellent customer service and A+ for their stitching & fabric quality. I would definitely recommend them.  ",
    img: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/USA.png',
  },
  {
    name: 'Prof. Javaid Awan',
    location: 'Lahore',
    stars: 5,
    text: "I recently purchased my son's wedding attire from Dulha House, The Mall Road Lahore, and I must say, the experience was exceptional! From the quality of the fabric to the intricate craftsmanship, everything exceeded my expectations. The designs were elegant, and the fitting was perfect.\n\nA special mention to Mr. Faizan, whose professionalism, commitment, and customer service were remarkable. He personally guided my son through the selection process, ensuring that every detail matched his preferences. His keen eye for fashion and commitment to customer satisfaction made the entire experience smooth and enjoyable.\n\nIf you're looking for premium wedding wear in Lahore, I highly recommend Dulha House Mall Road Lahore. Their attention to detail, top-notch quality, and excellent customer service make them a standout choice for grooms-to-be.",
    img: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/pak.jpg',
  },

  {
    name: 'Kinza Butt',
    location: 'Lahore',
    stars: 5,
    text: 'I had an amazing experience shopping at Dulha House for my Sherwani! The quality of the fabric and craftsmanship is exceptional. The staff was incredibly helpful and guided me through the entire process, ensuring I found the perfect Sherwani for my big day. They have a wide range of designs, and I was able to customize it to my exact preferences. The attention to detail is unmatched, and the fit was perfect! I received so many compliments at my wedding. Highly recommend Dulha House for anyone looking for the best in wedding attire.',
    img: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/pak.jpg',
  },
  {
    name: 'Asam Ahmed',
    location: 'United Kingdom',
    stars: 5,
    text: 'Experience from start to finish was top top class. Ordered my wedding sherwani before i got to lahore and received top class customer service from Dawood bhai. Then received a friendly welcome and service from the whole team at my trial. Also the final product was on another level to any other you would find in Lahore. Dulha house are the best on mall road you can see nobody else in the whole area has such quality work.',
    img: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/UK.png',
  },
  {
    name: 'Ruhma Butt',
    location: 'Lahore',
    stars: 5,
    text: "We bought sherwani for my husband and it was absolutely an amazing experience dealing with these guys.\n\nMr Dawood took our order 2 days before our wedding, and had his labour worked 24/7 to complete our order. Previously we had very bad experiences with nearby shops who claimed to be Dulha House but are fake and bogus.\n\nAlways find the original shop in the market, named as Dulha House. Shop 30 in Naqi Arcade.\n\nProfessionalism 100%\nQuality 100%\nSatisfaction 100%",
    img: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/pak.jpg',
  },
  {
    name: ' Sana Arif',
    location: 'Kuwait',
    stars: 5,
    text: "The best experience ever....I never had such a supportive and helpful consultation before… the sales associate(Dawood) was very cooperative  kind and understood all the details and changes givenThe best quality, exactly the same as shown in vedios and pictures on instagram…. No matter what part of the world you are in … they make it possible for you … :).Also Delivered on the committed time",
    img: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/kuwait.png',
  },
  {
    name: ' Shahbaz Ali',
    location: 'Rawalpindi - Pakistan',
    stars: 5,
    text: "I had a great experience at “Dulha House”. I ordered a customize sherwani, and the fit was perfect! From the moment (Dulha House) make a reservation, everything is simply perfect. The fabric was high quality, and the stitching was impeccable. The service was fantastic especially provided by Arslan bro, and the final product was superb. I would highly recommend (Dulha House) to anyone looking for quality custom tailoring👍",
    img: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/pak.jpg',
  },
  {
    name: 'Faraz Ahmed ',
    location: 'Canada',
    stars: 5,
    text: "Dulha House has been nothing but helpful in these times of Covid-19. I had an order made and shipped to Canada in less than two weeks. Impressed with the efficient customer service that they provide along with their work which is known to all",
    img: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/can.png',
  },
  {
    name: 'Areej Zahid',
    location: 'Islamabad - Pakistan ',
    stars: 5,
    text: "Outstanding experience! Arslan Shafique provided exceptional service, guiding me through the entire process - from showcasing the stunning sherwanis to ensuring a flawless fit. Highly impressed!",
    img: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/pak.jpg',
  },
  {
    name: 'Suhana Akhtar',
    location: 'Bangladesh',
    stars: 5,
    text: "I HIGHLY recommend this place and I am so glad we found them! We wanted a bespoke shirwani for our wedding reception and my husband preferred something simple and classic, but luxurious. We decided to go with a black-on-black embroidered shirwani with a black under-toned gold shawl. We told Dawood Bhai and showed him some pictures as well. He listened to exactly what we wanted and was able to source fabrics accordingly. He was very thorough, communication was amazing, and he even went to the extent to show various samples of fabrics in different lighting via video/pictures so that we could really see the color and get a feel for the material. Prices are very reasonable as well! For the shirwani, matching leather shoes, shawl, inner kurta and pants he told us he needed 3-4 weeks, but got the order ready early and sent it out at the 2.5 week mark as it was an international order. He even took the responsibility to ship it carefully himself so that the shirwani wouldn't get damaged in packaging. By far one of the best customer service experiences I've experienced in Pakistan thus far!",
    img: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/ban.png',
  },
  {
    name: 'Abubakar Sikandar',
    location: 'Multan - Pakistan',
    stars: 5,
    text: "I had a fantastic experience at Dulha House for my wedding sherwani. Arsalan Shafiq was incredibly helpful and made the entire process smooth and enjoyable. The sherwani was absolutely stunning, and I received so many compliments. Highly recommend Dulha House and especially seeking out Arsalan!",
    img: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/pak.jpg',
  },
 {
    name: 'Sidra Sanam',
    location: ' United Kingom ',
    stars: 5,
    text: " Had a great experience with them .last year I made my husband's wedding sherwani fitting quality and order time was 5 star .this time I ordered again party wear for my family and waist coat brother Dawood served me twice and he make the order in really short notice and delivered it in one day locally in the time of war .very happy with the service and quality . Definitely recommend it 👌",
    img: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/UK.png',
  },
  {
    name: 'Zain Ur Rehman ',
    location: 'Gujranwala  - Pakistan',
    stars: 5,
    text: " It was very Good. My order was on urgent basis and Dulha House team delivered me before time. Excellent services and skilled staff. Especially Shah G. Great person. Highly recommend 👌 ",
    img: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/pak.jpg',
  },
  {
    name: 'Mrs Anwar ',
    location: ' Lonodn, United Kingdom ',
    stars: 5,
    text: "Jazakallah it was beyond beautiful my brother looked like royalty. Ameen thank you so much, allah mia bless you and put Barkat in your business you have been lovely to speak to, kudos to your mother who raised a lovely son ",
    img: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/UK.png',
  },
  {
    name: ' Inam Zahoor',
    location: ' Ireland ',
    stars: 5,
    text: " Not the first time but these guys are keeping their standards high as always.Fully satisfied and I would suggest people to come here for the best experience.  ",
    img: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/flag-ireland-emoji-2048x1279-dze5vo5v.png',
  },
   {
    name: '  Sana Khan',
    location: ' Montreal, Canada ',
    stars: 5,
    text: " Salam, i want to give my review. Number nahi mil raha aapka but laazmi mene send karna tha aapko message.\n\nFirst of all it was a great pleasure to deal with dulha house. I ordered through WhatsApp. Dawood bhai se meri tafseel se baat huwi. Unho ne sizing ke mutabik mujhe videos send ki. Measurements mene khud li, bilkull perfect tha sab kuch. He also showed me different options for qulla when i mentioned. And i also wanted to let some things custom made. Itna acha inho ne mujhe samjhaya, har ek cheez saath saath me dikhayi, even pocketsquares mere liye khud market tak gaye lene. Their biggest concern was the sizing measurements. But alhamdoulillah it came out perfectly. Saath me mene shoes bhi liye the. Shoes were also very beautiful, nice quality.\n\nf you are confused about where you should go for your menswear for the weddingdays, pleaseeeeee i highly recommend contacting dulhahouse. They are professional and sweet. They handle everything with great care and love. You will not regret.  ",
    img: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/DULHAHOUSE/can.png',
  },



];

const ReviewsPage = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-8 lg:px-24">
       <h2
  className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 uppercase text-center mx-auto pt-36"
  style={{ fontFamily: 'Josefin Sans, Arial, sans-serif' }}
>
  What Our Client Says
</h2>
         
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
      Unfiltered Feedback From Our Valued Clients
      </p>

      <div className="grid gap-10 md:grid-cols-2">
        {reviews.map((review, index) => {
          const isLong = review.text.length > 200;
          const isExpanded = expanded[index];

          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-14 h-14 rounded-full border-2 border-red-400 ring-2 ring-white shadow-md"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-lg text-gray-900">{review.name}</h4>
                  <p className="text-sm text-red-500 font-medium">{review.location}</p>
                </div>
              </div>

              <p
                className={`text-gray-700 text-sm mb-3 leading-relaxed whitespace-pre-line ${
                  isLong && !isExpanded ? 'line-clamp-3' : ''
                }`}
              >
                “{review.text}”
              </p>

              <div className="mt-auto">
  {isLong && (
    <button
      onClick={() => toggleExpand(index)}
      className="flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium transition group"
    >
      {isExpanded ? 'See Less' : 'See More'}
      {isExpanded ? (
        <ChevronUpIcon className="ml-1 h-4 w-4 group-hover:translate-y-[-2px] transition-transform duration-300" />
      ) : (
        <ChevronDownIcon className="ml-1 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
      )}
    </button>
  )}

  <div className="flex text-yellow-400 mt-4">
    {[...Array(review.stars)].map((_, i) => (
      <StarIcon key={i} className="h-5 w-5" />
    ))}
  </div>
</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewsPage;
