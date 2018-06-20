import React from 'react';
import axios from 'axios';
import ProtectedRoute from './ProtectedRoute';
import Topic from './Topic';
import Topics from './Topics';
import TopicEditForm from './TopicEditForm';
import { setFlash, } from '../actions/flash';
import { setHeaders, } from '../actions/headers';
import { Switch, } from 'react-router-dom';

class FetchTopics extends React.Component {
  state = { topics: [], loaded: false, };

  componentDidMount() {
    axios.get('/api/topics')
      .then( res => {
        this.setState({ topics: res.data, loaded: true });
      })
      .catch( res => {
        this.props.dispatch(setFlash('Error...', 'red'));
      })
  };

  updateTopics = (topic) => {
    const compare = (a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      let comparison = 0;
      if (titleA > titleB) {
        comparison = 1;
      } else if (titleA < titleB) {
        comparison = -1;
      }
      return comparison;
    };

    let topics = this.state.topics.map( t => {
      if (t.id === topic.id) {
        return topic;
      } else {
        return t;
      }
    })
    topics = topics.sort(compare);
    this.setState({ topics });
  };

  handleDelete = (id) => {
    let confirm = window.confirm('Are you sure you want to delete?');
    if (confirm) {
      axios.delete(`/api/topics/${id}`)
        .then(res => {
          this.props.dispatch(setFlash('Topic Deleted', 'green'));
          this.props.dispatch(setHeaders(res.headers));
          this.setState({ topics: this.state.topics.filter( t => t.id !== id) });
          this.props.history.push('/topics');
        })
        .catch(err => {
          this.props.dispatch(setFlash('Error deleting topic...', 'red'));
          this.props.dispatch(setHeaders(err.headers))
        });
    }
  };

  render() {
    if (!this.state.loaded) return null;
    return (
      <Switch>
        <ProtectedRoute
          exact
          path='/topics'
          component={Topics}
          topics={this.state.topics}
        />
        <ProtectedRoute
          exact
          path='/topics/:id'
          component={Topic}
          topics={this.state.topics}
          handleDelete={this.handleDelete}
        />
        <ProtectedRoute
          exact
          path='/topics/:id/edit'
          component={TopicEditForm}
          updateTopics={this.updateTopics.bind(this)}
          topics={this.state.topics}
        />
      </Switch>
    )
  }
}

export default FetchTopics;
