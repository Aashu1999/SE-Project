.layout {
    display: flex;    
    flex-direction: column;
    width: 100%;
    position: relative;
}

.bg-img {
    background-image: url(../../assets/lib.jpg);
    background-size: cover;
    background-position: center;
    background-attachment: fixed; 
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    filter: blur(3.2px);
}

.content {
    flex-grow: 1;
}

.home-header {
    z-index: -9;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1;
    gap: 0px; 
    border-bottom: 2px solid #4ECCA3;
    

}

.home-header h3{
    padding-left: 100px;
    margin: 0px;
    font-size: 1.4rem;
    margin: auto;
}

.header-user {
    display: flex;
    align-items: center;
    padding: 0px 60px;
    justify-content: flex-end;
}

.header-user p {
    font-size: 1.1rem;
    padding-left: 1rem;
    font-weight: 550;
}





.book-cards-container {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem; 
    padding: 10px 50px;
    justify-content: center;
    align-content: center;
    align-items: center;
    
}





  