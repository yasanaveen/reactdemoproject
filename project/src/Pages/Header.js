function Header() {
    return (
      <header>
    <div>
      <img src={image} alt="Logo" />
    </div>
    <div className="search-container">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="Ask for anything" className="search-input" />
        </div>
        
  </header>
  
    );
  }
  export default 