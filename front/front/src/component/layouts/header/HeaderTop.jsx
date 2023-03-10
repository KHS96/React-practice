import React from 'react'

export default function HeaderTop() {
    return (
        <div>

            <div className="header-top">
                <div className="menu-icon">
                    <a href="menu.html"><img src="assets/images/icons/menu.svg" alt=""/></a>
                </div>
                <h1>온라인 스토어</h1>
                <nav>
                    <ul>
                        <li><img src="images/icons/search.svg" alt=""/></li>
                        <li><img src="images/icons/shopping-cart.svg" alt=""/></li>
                        <li><img src="images/icons/user.svg" alt=""/></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
