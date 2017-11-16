import React from 'react';

export default class App extends React.Component {
    render() {
        return (
            <div id="page">

                <header>
                    Unread posts: <span className="unread">0</span>
                </header>

                <div>

                    <nav className="leftmenu">

                        <h2>You</h2>

                        <a href="#">Selected posts</a>
                        <a href="#">Messenger</a>
                        <a href="#">Marketplace</a>

                    </nav>

                    <div className="feed">

                        <div className="new_post">

                            <form action="">

                                <textarea name="text" id="" cols="30" rows="10" placeholder="What are you thinking about?"></textarea>

                                <input type="submit" value="add"/>

                            </form>

                        </div>

                        <ul>

                            <li className="post">

                                <div className="user">You</div>

                                <div className="time">4 minutes ago</div>

                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                            </li>

                            <li className="post">

                                <div className="user">You</div>

                                <div className="time">4 hours ago</div>

                                <p>In enim a arcu imperdiet malesuada. Nullam faucibus mi quis velit. Aenean fermentum risus id tortor. Et harum quidem rerum facilis est et expedita distinctio. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Nam sed tellus id magna elementum tincidunt.</p>

                            </li>

                        </ul>

                    </div>

                    <nav className="contacts">

                        <h2>Contacts</h2>

                        <a href="#">Mark Zuckerberg</a>
                        <a href="#">Jana Večerková</a>
                        <a href="#">Ada Lovelace</a>
                    </nav>

                </div>

            </div>
        )
    }
}