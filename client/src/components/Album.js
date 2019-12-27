import React from 'react';

import {
    Card,
    // eslint-disable-next-line
    CardText,
    CardBody,
    CardLink,
    CardTitle,
    CardSubtitle,
    CardDeck,
} from 'reactstrap';

const styles = {
    album: {
        overflow: 'hidden',
        paddfingLeft: '8em',
        width: '300px',
        height: '450px',
        borderRadius: '2px 2px 2px 2px',
        display: 'inline-block',
        background: '#343a40',
        padding: '5px',
        boxSizing: 'content-box',
        
    },
    imageContainer: {
        margin: '10px auto 0 auto'
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
        margin: '0 auto'
    },
    albumText: {
        overflow: 'hidden',
        width: '210px',
        color: '#e9ecef'
    },
    trackName: {
        fontSize: '18px',
        fontWeight: 'bold',
        margin: '5px 1px',
        textAlign: 'center',
        height: 'auto',
        overflow: 'hidden'
    },
    artistName: {
        fontSize: '18px',
        margin: '5px 1px',
        textAlign: 'center',
        height: 'auto',
        overflow: 'hidden'
    },
    description: {
        fontSize: '13px',
        textAlign: 'center',
    },
    link: {
        textAlign: 'center',
        color: 'black'
    },
    CardBody: {
        padding: '0px',
    }
};

class Album extends React.Component {
    render() {
        return (
            <div className="album-container" style={styles.album}>
                <CardDeck>
                    <Card>
                        <CardBody style={styles.CardBody}>
                            <CardTitle style={styles.trackName}>{this.props.album.trackName}</CardTitle>
                            <CardSubtitle style={styles.artistName}>{this.props.album.artistName}</CardSubtitle>
                        </CardBody>

                        <img
                            src={this.props.album.artworkUrl200}
                            alt={this.props.album.artistName}
                            style={styles.imageContainer} />
                        {/* <CardBody style={styles.CardBody}>
                            <CardText style={styles.description}>{this.props.album.shortDescription}</CardText>
                        </CardBody> */}
                        <CardLink
                            style={styles.link}
                            href={this.props.album.previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >Preview
                        </CardLink>
                        <CardLink
                            style={styles.link}
                            href={this.props.album.trackViewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >Link to Store
                        </CardLink>
                        <br />
                    </Card>
                </CardDeck>
            </div>
        );
    }
}

export default Album;