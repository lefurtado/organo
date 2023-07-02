import './Rodape.css';

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://facebook.com" target="_blank" rel='noreferrer'>
                        <img src="/images/fb.png" alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com" target="_blank" rel='noreferrer'>
                        <img src="/images/tw.png" alt="Twitter" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com" target="_blank" rel='noreferrer'>
                        <img src="/images/ig.png" alt="Instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/images/logo.png" alt="Organo Logo" />
        </section>
        <section>
            <p>
                Desenvolvido por Leandro Furtado.
            </p>
        </section>
    </footer>)
}

export default Rodape;