import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/46249623?s=460&u=a3d13f9cbb3f9064bf130d2c61474b15a102c448&v=4" alt="Werick Nalyson" />
                        <div>
                            <strong>Werick Nalyson</strong>
                            <span>Matemática</span>
                        </div>
                    </header>

                    <p>
                        Entusiasta das melhores tecnologias de química avançada
                        <br/> <br/>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis iure officia reiciendis accusantium, impedit id sapiente dolores odio, dolor suscipit alias in! Illo molestiae aut eligendi enim minima explicabo aliquid!
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 200,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Entrar em contato" />
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;