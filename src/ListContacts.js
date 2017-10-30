// Component that lists our contacts.

// Anytime we want to use a component, we must import it.
import React, { Component } from 'react'

class ListContacts extends Component {
    // Specify UI for component
    render() {
        return (
            // Maps over each contact in the contacts array
            <ol className="contact-list">
                {this.props.contacts.map((contact) =>(
                    //Display contact name
                    <li key={contact.id} className="contact-list-item">
                        <div className="contact-avatar" style={{
                            backgroundImage: `url(${contact.avatarURL})`
                        }}></div>
                        <div className="contact-details">
                            <p>{contact.name}</p>
                            <p>{contact.email}</p>
                        </div>
                        <button className="contact-remove">
                            Remove
                        </button>
                    </li>
                ))}
            </ol>
        )
    }
}

// exporting allows us to import into App
export default ListContacts
