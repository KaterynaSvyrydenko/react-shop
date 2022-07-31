function Footer()  {
    const Year = new Date().getFullYear;
      return  <footer className="page-footer teal lighten-2">
                <div className="footer-copyright">
                    <div className="container">
                        ©  {Year} Copyright Text
                        <a className="grey-text text-lighten-4 right" href="#!">Repo</a>
                    </div>
                </div>
            </footer>
    }
    
    export {Footer};