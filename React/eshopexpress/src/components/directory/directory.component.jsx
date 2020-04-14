import React from 'react';
import MenuItem from '../menu-items/menu-items.components';
import './directory.scss';


class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            category : [{
                id : 1,
                title: 'RING',
                imageURL : 'https://images.unsplash.com/photo-1542273286-6f68b1f6a97f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            },
            {
                id : 2,
                title: 'WATCH',
                imageURL : 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            },
            {
                id : 3,
                title: 'DENIM',
                imageURL : 'https://images.unsplash.com/photo-1541085388148-a30647cab28f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            },
            {
                id : 4,
                title: 'FOOTWEAR',
                size:'large',
                imageURL : 'https://images.unsplash.com/photo-1459712105412-be146fae746d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            },
            {
                id : 5,
                title: 'MAKEUP',
                size:'large',
                imageURL : 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            }
        ]
        }
    }

    render(){
        return (
            <div className="directory-menu">
                {
                    this.state.category.map(({title, id, imageURL, size }) => ( <MenuItem key = {id} title={title}  img = {imageURL} size={size} /> ))}
            </div>
        );
    }
}

export default Directory;