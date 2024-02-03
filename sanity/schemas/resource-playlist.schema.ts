const schema = {
    name: 'resourcePlaylist',
    title: 'Resource Playlist',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'title',
        type:'string',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'resources',
        title:'resources',
        type: 'array',
        of: [
          {type: 'reference' ,to: {type: 'resource'}}
        ]
      }
    ]
}

export default schema;