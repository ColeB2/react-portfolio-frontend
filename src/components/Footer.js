import React from "react";

export default function Footer() {
    return (
        <div>
            <footer>
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item">
                        <a href="/portfolio" class="nav-link px-2 text-muted">
                            Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="mailto:cebCole@gmail.com" class="nav-link px-2 text-muted">
                            Contact
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="." class="nav-link px-2 text-muted">
                            Nothing?
                        </a>
                    </li>
                </ul>
                <p class="text-center text-muted footer-text">
                    <a class="footer-text"
                        href="https://coleb.pythonanywhere.com">
                        Cole B
                    </a>
                </p>

            </footer>
        </div>
    )
}