'use strict'

const Schema = use('Schema')

class PostSchema extends Schema {

  up () {
    this.create('posts', (table) => {
      table.increments();
      table.string('title', 60).notNullable();
      table.string('post', 60).notNullable();
      table.integer('user_id');

      table.timestamps();
    })
  }

  down () {
    this.drop('posts')
  }

}

module.exports = PostSchema
