function skillsMember() {
  return {
    name: 'skillsMember',
    template: `
      <div>
        <h1>Skills Member</h1>
        <div v-for="skill in skills" v-bind:key="skill.id">
          <h2>{{ skill.name }}</h2>
          <p>{{ skill.description }}</p>
        </div>
      </div>
    `,
    data() {
      return {
        skills: [
          { id: 1, name: 'JavaScript', description: 'JavaScript is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.' },
          { id: 2, name: 'HTML', description: 'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.' },
          { id: 3, name: 'CSS', description: 'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML.' },
        ]
      }
    }
  }
}