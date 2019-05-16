import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

import IconHome from '@material-ui/icons/Home';
import GradeIcon from '@material-ui/icons/Grade';
import SpeakerNotes from '@material-ui/icons/SpeakerNotes';
import IconDelete from '@material-ui/icons/Delete';
import IconBorderColor from '@material-ui/icons/BorderColor';
import IconThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import IconThumbDownAlt from '@material-ui/icons/ThumbDownAlt';
import IconRedux from '@material-ui/icons/OpenWith';
import IconUdacity from '@material-ui/icons/School';
import IconReact from '@material-ui/icons/ImportantDevices';

import styles from '../styles/StylePosts'
import { timestampToDate } from '../utilities/timestampToDate';
import { capitalize } from '../utilities/capitalize';

function handleDelete() {
  alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function handleClick() {
  alert('You clicked the Chip.'); // eslint-disable-line no-alert
}

class PostCard extends Component {
  state = { _commentCount: 0 }

  renderIcon = (icon) => {
    switch (icon) {
      case 'react':
        return <IconReact />
      case 'redux':
        return <IconRedux />
      case 'udacity':
        return <IconUdacity />
      default:
        return <IconHome />       
    }
  }  

  componentWillMount() {
    const { post } = this.props;
    this.props.fetchCommentsCount(post.id, (data) => { this.setState({ _commentCount: data.amount }); });
  }  

  render() {
    const { classes, post, onDeletePost, commentCount, voteForPost } = this.props;    

    console.log(this.props)

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>              
              {this.renderIcon(post.category)}
            </Avatar>
          }
          title={
            <Typography component="h5" variant="h5">
              {post.title}
            </Typography>
          }
          subheader={`Posted by ${post.author} - ${timestampToDate(post.timestamp)}`}
        />

        { post.body.length > 0 &&(
          <CardContent>
            <Typography component="p">
              <b>{`( ${capitalize(post.category)} )`}</b> {post.body}
            </Typography>
          </CardContent>
        )}

        <CardActions className={classes.actions} disableActionSpacing>
          <Badge badgeContent={post.voteScore} color="primary" >
            <GradeIcon />
          </Badge>              
          <Chip
            avatar={            
              <Avatar >
                <IconThumbUpAlt />
              </Avatar>
            }
            label="Up Vote" clickable className={classes.chip} color="primary" onClick={() => voteForPost(post.id, 'upVote')}         
          />
          <Chip
            avatar={
              <Avatar>
                <IconThumbDownAlt />
              </Avatar>
            }
            label="Down Vote" clickable className={classes.chip} color="primary" onClick={() => voteForPost(post.id, 'downVote')}         
          />

          <IconButton ></IconButton>         

          <IconButton aria-label="4 pending messages" className={classes.margin}>
            <Badge badgeContent={10} color="primary">
              <SpeakerNotes />
            </Badge>
          </IconButton>    

          <IconButton ></IconButton>         
          <IconButton ></IconButton>         

          <Chip
            avatar={
              <Avatar>
                <IconBorderColor />
              </Avatar>
            }
            label="Edit" clickable className={classes.chip} color="primary" onClick={handleClick}         
          />
          <Chip
            avatar={
              <Avatar>
                <IconDelete />
              </Avatar>
            }
            label="Delete" clickable className={classes.chip} color="secondary" onClick={handleDelete}         
          />

        </CardActions>
      </Card>
    );
  }
}

PostCard.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
};

export default withStyles(styles)(PostCard);