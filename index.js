// function sendMail() {
//     var params = {
//       from_name: document.getElementById("fullName").value,
//       email_id: document.getElementById("email_id").value,
//       message: document.getElementById("message").value,
//     }
//     emailjs.send("service_ad0we2n","template_5urr23j")
//       .then(function(res){
//         alert("Success!" + res.status);
//       });
// }
function sendMail() {
    var params = {
      name: document.getElementById("FullName").value,
      email: document.getElementById("Email_id").value,
      message: document.getElementById("Message").value,
    };
  
    const serviceID = "service_ad0we2n";
    const templateID = "template_5urr23j";
  
      emailjs.send(service_ad0we2n, template_5urr23j, params)
      .then(res=>{
          document.getElementById("FullName").value = "";
          document.getElementById("Email").value = "";
          document.getElementById("Message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  