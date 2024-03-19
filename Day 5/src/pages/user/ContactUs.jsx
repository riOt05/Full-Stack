import "../../assets/css/ContactUs.css";

// function ContactUs() {
//   return (
//     <div className="contactus">
//       <div>
//         <form>
//           <h2 style={{ textAlign: "center", fontSize: "40px", color: "white" }}>
//             Book your Event
//           </h2>
//           <div className="contact-form">
//             <input className="contact-tags" type="text">
//               Enter your name
//             </input>

//             <input className="contact-tags" type="email"></input>

//             <input className="contact-tags" type="text"></input>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ContactUs;

const Contactus = () => {
  return (
   
    <header>
        <div class="contact-form">

      <div class="contactus">
        <h1>
          <span class="contact">Contact</span> Us
        </h1>
        <p>Please fill out the form below to contact us</p>

        <div id="form-group">
          <label for="Name">Name</label>
          <input class="contact-tags" type="text" name="Name"  ></input>
        </div>
        <div id="form-group">
          <label for="Email">Email</label>
          <input class="contact-tags" type="email" name="Email" />
        </div>
        <div id="form-group">
          <label for="message">Message</label>
          <textarea class="contact-tags" name="message"></textarea>
        </div>
        <div>
          <button class="submitbutton" >Submit</button>
        </div>
        </div>
      </div>
    <div className="contacts-container">
        <div className="contacts">
          <h3> OUR MAIN OFFICE</h3> 
            <p>SoHo 94 Broadway St New 
                York,Ny 1001
            </p>
        </div>
        <div className="contacts-bottom">
            <h3>PHONE NUMBER</h3>
            <p>234-9879-3567</p>
        </div>
        <div className="contacts-bottom">
            <h3>FAX</h3>
            <p>1-234-345-8900</p>
        </div>
        <div className="contacts-bottom">
            <h3>EMAIL</h3>
            <p>hari143pd@gmail.com</p>
        </div>

    </div>
     
    </header>
  );
};
export default Contactus;
