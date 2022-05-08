<template>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<body>

   <br/><br/>
      <br/>
      <br/><br/>


<div class="w3-row-padding">
  <div class="w3-third">
    <h2>Comment</h2>
        <form class = "form">
            <label for="email">Email</label><br />
            <input type="email" name="email" placeholder="email address"/>
            <br />
            <label for="message">Pesan</label><br />
            <textarea name="message" placeholder="Tulis pesan anda..." rows="4" cols="50"></textarea>
            <br />
            <br />
            <button type="button" class="btn btn-success">SEND</button>
        </form>
  </div>

  <div class="w3-third">
    <h2>Location</h2>
    <iframe class = "map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31917.498658338423!2d101.36678302119999!3d0.46427799279276555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ac01177a52af%3A0xbb3c60772e1579a!2sUniversitas%20Islam%20Negeri%20Sultan%20Syarif%20Kasim!5e0!3m2!1sid!2sid!4v1649601492759!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>

  <div class="w3-third">
    <h2>Social Media</h2>
    <a class="social-media-icon" href="https://www.instagram.com/x_xhndy/"><span class="fab fa-instagram"> Instagram</span></a>
    <br>
    <a class="social-media-icon" href="https://link_social_mendia_anda"><span class="fab fa-whatsapp"> whatsapp</span></a>
    <br/>
    <a class="social-media-icon" href="https://link_social_mendia_anda"><span class="fab fa-facebook"> Facebook</span></a>
    <br/>
    <a class="social-media-icon" href="https://youtu.be/M135huC0ZGk"><span class="fab fa-youtube"> Youtube</span></a>
  </div>
</div>

</body>

    <hr/>

    <footer style="text-align: center; color: white">
        <p>Copyright &copy; 2022 Chindi Agustina.</p>
    </footer>
</template>

<style scoped>
  ul {
  list-style-type: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 10px;
  padding: 0;
  overflow: hidden;
  background-color: rgb(77, 109, 199);
}

.map {
  width: 400px;
  height: 500px;
}
.w3-row-padding {
  text-align: left;
}
.social-media-icon{
  height: 100px;
  widows: 100px;
}
.w3-container w3-green{
    margin-top: 350px;
}
body{
    color: white;
    background-color: rgba(0, 0, 0, 0.253);
}
</style>