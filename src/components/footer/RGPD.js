import React from "react";
import CookieConsent from "react-cookie-consent";

const Rgpd = () => {
  const handleDecline = () => {
    // Logique à exécuter lorsque l'utilisateur refuse les cookies
    console.log("Utilisateur a refusé les cookies.");
  };

  return (
    <div>
      {/* Votre contenu de page */}
      <CookieConsent
        location="bottom"
        buttonText="Accepter"
        cookieName="myCookieConsent"
        style={{ background: "#333" }}
        buttonStyle={{ color: "#fff", fontSize: "13px", background: "#ff5d56" }}
        expires={150}
      >
        Ce site utilise des cookies pour améliorer votre expérience. En
        continuant à naviguer sur le site, vous acceptez notre utilisation des
        cookies.
      </CookieConsent>
    </div>
  );
};

export default Rgpd;
