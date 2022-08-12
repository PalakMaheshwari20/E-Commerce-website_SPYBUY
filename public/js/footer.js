const createFooter = () => {  /*function createFooter */
    let footer = document.querySelector('footer'); /*select the footer element using querySelector method */
    /*assign innerHTML value */
    footer.innerHTML = `        
    <div class="footer-content">
    <img src="../img/light-logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">men</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">women</li>
            <li><a href="#" class="footer-link">kurti</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">top</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">bodycon</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">ethnic</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
        </ul>
    </div>
    </div>
    <p class="footer-title">About Makers of this website</p>
    <p class="info">This website has been created by three innovative minds, with an idea to build up a website extremely user - friendly and seller - friendly. We hope that you liked our website. We are grateful that you took out some time to scoll - down till here and gave some time to the makers of this website.<br><br><br>Our names are : <b>SANIYA JAIN<b>&nbsp;&nbsp;&nbsp; <b>PALAK MAHESHWARI<b>&nbsp;&nbsp;&nbsp; <b>YASHASHWI PANDEY<b><br><br></p>
    <p class="info">Support Email - spybuy22@gmail.com </p>
    <p class="info">Telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="/seller" class="social-link">become a seller</a>
        </div>
    <div>
        <a href="https://instagram.com/spybuy2022?igshid=YmMyMTA2M2Y=" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twitter</a>
    </div>
    </div>
    <p class="footer-credit">SPY-BUY: Just One Tap Away From Your Favourites</p> 
    `;
}

createFooter(); /*call the function */