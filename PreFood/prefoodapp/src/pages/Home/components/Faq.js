import Accordion from "react-bootstrap/Accordion";
import "../HomePage.css"

export const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "How do I place an order using the digital food menu?",
      answer:
        "Ordering from our digital food menu is simple! Just browse through the menu items, select the dishes you'd like to order, and add them to your cart. Once you've added all your desired items, proceed to checkout, where you can review your order, choose your preferred payment method, and confirm your order. Enjoy the convenience of ordering your favorite meals with just a few clicks!",
    },
    {
      id: 2,
      question: "Can I customize my order through the digital food menu?",
      answer:
        "Absolutely! Our digital food menu allows you to customize your order according to your preferences. Whether you want to add extra toppings, make substitutions, or specify cooking instructions, you have the flexibility to tailor your meal exactly how you like it.",
    },
    {
      id: 3,
      question:
        "Are nutritional information and allergen details available on the digital menu?",
      answer:
        "Yes, we provide comprehensive nutritional information and allergen details for all our menu items on the digital menu. You can easily access this information to make informed choices based on your dietary preferences or restrictions.",
    },
    {
      id: 4,
      question:
        "How do I know if my order has been received after placing it through the digital menu?",
      answer:
        "Once you've successfully placed your order through the digital menu, you'll receive a confirmation notification confirming that your order has been received. You can also track the status of your order in real-time through the app, ensuring you're always informed about the progress of your order.",
    },
    {
      id: 5,
      question: "Can I schedule a future order using the digital food menu?",
      answer:
        "Yes, our digital food menu allows you to schedule future orders at your convenience. Whether you want to plan ahead for a special occasion or set up a recurring order for your favorite meals, you can easily schedule your order for a specific date and time through the app.",
    },
    {
      id: 6,
      question:
        "Is there a loyalty program or rewards system available through the digital food menu?",
      answer:
        "Absolutely! Our digital food menu offers a loyalty program where you can earn rewards and exclusive discounts with every order. Simply sign up for our loyalty program through the app and start earning points towards exciting rewards every time you order.",
    },
  ];

  return (
    <div className="FaqContainer">
      <h1>Question ?</h1>
      <div className="FaqContainerItem">

        
        {faqs.map(({id , question, answer,index }) => (
         
          <Accordion defaultActiveKey="1" flush >
            <Accordion.Item  Key={id} eventKey={index === 0 ? "true" : `${id}`}  >
              <Accordion.Header>
                {question}
              </Accordion.Header>
              <Accordion.Body>
                {answer}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
