<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <h1> {{ title }} </h1>
<div class="message" v-if="message">
<p>{{ message }}</p>
</div>
<div class="new-note">
<input v-model="note.title" type="text">
<textarea v-model="note.description"></textarea>
<button @click='addNote'>Create</button>
</div>
<div class="notes">
<div class="note" v-for="(note, index) in notes" :key="index">
<div class="note-header">
<p>{{ note.title }}</p>
</div>
<div class="note-description">
<p>{{ note.description }}</p>
</div>
<div class="note-date">
<span>{{ note.date }}</span>
</div>
</div>
</div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      title: 'Notes App',
message: null,
note: {
title: '',
description: '',
},
notes: [
{
title: 'The First Note',
description: 'The First Note Description',
date: new Date(Date.now()).toLocaleString()
},
{
title: 'The Second Note',
description: 'The Second Note Description',
date: new Date(Date.now()).toLocaleString()
},
{
title: 'The Third Note',
description: 'The Third Note Description',
date: new Date(Date.now()).toLocaleString()
}
]
    }
  },
methods: {
addNote() {
let {title, description} = this.note
if (title === '') {
this.message = 'Input a title'
return false
}
this.notes.push({
title,
description,
date: new Date(Date.now()).toLocaleString(),
})
this.note.title = ''
this.note.description = ''
this.message = null
}
}
}
</script>

<style>

</style>
