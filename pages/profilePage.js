import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import actions, { actionPropTypes } from '../src/actions';
import '../styles/profilePage.scss';
import ProfileSubmission from '../src/components/ProfileSubmission';

/**
 * Ce composant React permet l'affichage de la page profil.
 */
class profilePage extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
  };

  componentWillMount() {
    const {
      PROFILE_AVATAR,
      PROFILE_DESC,
      tags,
      USER_FIRSTNAME,
      USER_NAME,
    } = this.getProfile(this.props);
    this.setState({
      PROFILE_AVATAR,
      PROFILE_DESC,
      tags,
      USER_FIRSTNAME,
      USER_NAME,
    });
  }

  /**
   * Récupère le profil courant ou s'il n'est pas défini, il récupère le nouveau profil
   * @param {*} newProps :  profil courant ou le nouveau profil
   */
  componentWillReceiveProps(newProps) {
    if (this.getProfile(this.props).PROFILE_AVATAR === '' && this.getProfile(newProps).PROFILE_AVATAR !== '') {
      const {
        PROFILE_AVATAR,
      } = this.getProfile(newProps);
      this.setState({
        PROFILE_AVATAR,
      });
    }
    if (this.getProfile(this.props).PROFILE_DESC === '' && this.getProfile(newProps).PROFILE_DESC !== '') {
      const {
        PROFILE_DESC,
      } = this.getProfile(newProps);
      this.setState({
        PROFILE_DESC,
      });
    }
    if (this.getProfile(this.props).tags === '' && this.getProfile(newProps).tags !== '') {
      const {
        tags,
      } = this.getProfile(newProps);
      this.setState({
        tags,
      });
    }
    if (this.getProfile(this.props).USER_FIRSTNAME === '' && this.getProfile(newProps).USER_FIRSTNAME !== '') {
      const {
        USER_FIRSTNAME,
      } = this.getProfile(newProps);
      this.setState({
        USER_FIRSTNAME,
      });
    }
    if (this.getProfile(this.props).USER_NAME === '' && this.getProfile(newProps).USER_NAME !== '') {
      const {
        USER_NAME,
      } = this.getProfile(newProps);
      this.setState({
        USER_NAME,
      });
    }
  }

  /**
   * Récupère les propriétés du profil du props et retourne les propriétés.
   */
  getProfile = (props) => {
    const { profile: { profile } } = props;
    if (!profile) {
      return {
        PROFILE_AVATAR: '',
        PROFILE_DESC: '',
        tags: [],
        USER_FIRSTNAME: '',
        USER_NAME: '',
      };
    }
    const {
      PROFILE_AVATAR,
      PROFILE_DESC,
      tags,
      USER_FIRSTNAME,
      USER_NAME,
    } = profile[0];
    return {
      PROFILE_AVATAR,
      PROFILE_DESC,
      tags,
      USER_FIRSTNAME,
      USER_NAME,
    };
  }

  /**
   * Cette méthode est déclenché lors de l'envoi du formulaire du profil.
   * Elle permet de sauvegarder le profil de l'utilisateur.
   */
  onSubmit = (event) => {
    event.preventDefault();
    const { actions: { profileSaveAction } } = this.props;
    const {
      PROFILE_AVATAR,
      PROFILE_DESC,
      tags,
      USER_FIRSTNAME,
      USER_NAME,
    } = this.state;
    profileSaveAction({
      PROFILE_AVATAR,
      PROFILE_DESC,
      tags,
      USER_FIRSTNAME,
      USER_NAME,
    });
    Router.push('/profile');
  }

  /**
   * Cette méthode est déclenchée lors d'un changement de l'URL de l'image du profil.
   */
  onChange = name => ({ target: { value } }) => {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="profilePage">
        <ProfileSubmission
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          profile={this.state}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ profile }) => ({ profile: profile.data });

export default (connect(mapStateToProps, actions)(profilePage));
