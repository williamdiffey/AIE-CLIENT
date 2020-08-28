import React, { Component } from 'react'
import { Button, Input, Textarea, Select } from '../Utils/Utils'
import ArticleApiService from '../../services/article-api-service'
export default class NewPostForm extends Component {
  static defaultProps = {
    onPostSuccess: () => {},
  }

  state = { error: null }

  handleSubmitArticle = (ev) => {
    ev.preventDefault()
    this.setState({ error: null })
    const { title, style, content } = ev.target

    ArticleApiService.postArticle({
      style: style.value,
      content: content.value,
      title: title.value,
    })
      .then((res) => {
        style.value = ''
        content.value = ''
        title.value = ''
        this.props.onPostSuccess()
      })
      .catch((res) => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form className='NewArticleForm' onSubmit={this.handleSubmitArticle}>
        <div role='alert'>{error && <p className='red'>{error}</p>}</div>

        <div className='title'>
          <label htmlFor='PostForm__title'>Title</label>
          <Input required name='title' id='PostForm__title'></Input>
        </div>

        <div className='style'>
          <label htmlFor='PostForm__style'>Style</label>
          <Select required name='style' id='PostForm__style'>
            <option value='Story'>Story</option>
            <option value='Grammar'>Grammar</option>
            <option value='Vocabulary'>Vocabulary</option>
            <option value='Chat'>Chat</option>
          </Select>
        </div>

        <div className='content'>
          <label htmlFor='PostForm__content'>Content</label>
          <Textarea required name='content' id='PostForm__content'></Textarea>
        </div>

        <Button type='submit'>Submit New Post</Button>
      </form>
    )
  }
}
