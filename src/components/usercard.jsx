const Usercard = () => {
    const profilePhoto = "https://coherent-labs.com/wp-content/uploads/2017/05/logo_Hummingbird_4d1379e04c615504558b870cf881ba22.png"; 
    const name = "hummingbird";
    const email = "hummingbird@gmail.com";
    const phone = "+91 9345628270";
    const address = "Amazon forest";
  
    return (
      <div style={styles.card}>
        <img src={profilePhoto} alt="Profile" style={styles.image} />
        <h2 style={styles.name}>{name} </h2>
        <p style={styles.info}>Email: {email}</p>
        <p style={styles.info}>Phone: {phone}</p>
        <p style={styles.info}>Address: {address}</p>
      </div>
    );
  };
  
  const styles = {
    card: {
      border: "1px solid rgb(0, 0, 0)",
      borderRadius: "8px",
      padding: "16px",
      backgroundColor: "rgb(246, 252, 255)",
      textAlign: "center",
    },
  
    image: {
      borderRadius: "50%",
      width: "100px",
      height: "100px",
    },
  
    name: {
      margin: "8px 0",
      fontSize: "1.5em",
      color: "#213555",
    },
  
    info: {
      fontSize: "1em",
      color: "#3E5879",
      margin: "4px 0",
    },
  };
  
  export default Usercard;