import React from "react";
import { Link } from "react-router-dom";

const HydrophobicData = {
   id: "hydrophobic-iol",
   displayName: "HYDROPHOBIC IOL",
   subtitle: "Monofocal / Premium / 3-Piece",
   description:
      "For our hydrophobic IOL, we use a raw material from USA. Our raw material is a specific Medical Grade material for medical application. Our Hydrophobic Material contents less than 0.5% of water, and is a real HYDROPHOBIC material, compared to other materials. It has a low refractive index to reduce the risk of glares and halos. It is suitable for a wide range of lens designs using an incision size as low as 2.2mm.",
   children: [
      {
         id: "monofocal-hydrophobic-iol",
         displayName: "MONOFOCAL IOL",
         description: "3 models are available as a MONOFOCAL Intraocular Lens:",
         apiLink: "/our-products/intraocular-lenses/hydrophobic-iol/monofocal-hydrophobic-iol",
         children: ["Freedom ARC", "Freedom ACE", "Freedom ZEN"]
      },
   ]
};

const styles = {
   container: {
      padding: "60px 80px",
      backgroundColor: "#ffffff",
      color: "#08306B"
   },

   header: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "60px",
      marginBottom: "60px"
   },

   title: {
      fontSize: "32px",
      fontWeight: "700",
      marginBottom: "12px"
   },

   subtitle: {
      fontSize: "20px",
      color: "#0AA6A6"
   },

   description: {
      lineHeight: "1.8",
      color: "#4B5563"
   },

   cards: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "40px"
   },

   card: {
      backgroundColor: "#F4FBFF",
      padding: "40px",
      borderRadius: "8px",
      border: "1px solid #DBEAFE"
   },

   icon: {
      fontSize: "42px",
      marginBottom: "16px",
      color: "#0AA6A6"
   },

   cardTitle: {
      color: "#0AA6A6",
      marginBottom: "16px"
   },

   cardDesc: {
      marginBottom: "16px",
      color: "#4B5563"
   },

   list: {
      paddingLeft: "20px",
      marginBottom: "24px"
   },

   listItem: {
      marginBottom: "8px"
   },

   button: {
      display: "inline-block",
      padding: "10px 24px",
      borderRadius: "24px",
      backgroundColor: "#0AA6A6",
      color: "#ffffff",
      textDecoration: "none",
      fontWeight: "600"
   }
};

const Hydrophobic = () => {
   return (
      <section style={styles.container}>
         {/* Header */}
         <div style={styles.header}>
            <div>
               <h1 style={styles.title}>{HydrophobicData.displayName}</h1>
               <p style={styles.subtitle}>{HydrophobicData.subtitle}</p>
            </div>

            <div>
               <p style={styles.description}>{HydrophobicData.description}</p>
            </div>
         </div>

         {/* Cards */}
         <div style={styles.cards}>
            {HydrophobicData.children.map(card => (
               <div key={card.id} style={styles.card}>
                  <div style={styles.icon}>👁</div>

                  <h3 style={styles.cardTitle}>{card.displayName}</h3>
                  <p style={styles.cardDesc}>{card.description}</p>

                  <ul style={styles.list}>
                     {card.children.map(model => (
                        <li key={model} style={styles.listItem}>
                           {model}
                        </li>
                     ))}
                  </ul>
                  <Link to={card.apiLink} style={styles.button}>
                     LEARN MORE
                  </Link>
               </div>
            ))}
         </div>
      </section>
   );
};

export default Hydrophobic;
