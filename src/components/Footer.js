import React from "react";

export default function Footer() {
    return (
        <div>
            <footer>
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <a href="/portfolio" className="nav-link px-2 text-muted">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="mailto:cebCole@gmail.com" className="nav-link px-2 text-muted">
                            Contact
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="." className="nav-link px-2 text-muted">
                            Nothing?
                        </a>
                    </li>
                </ul>
                <p className="text-center text-muted footer-text">
                    <a className="footer-text"
                        href="https://coleb.pythonanywhere.com">
                        Cole B
                    </a>
                </p>

            </footer>
        </div>
    )
}