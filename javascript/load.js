function load(blog) {
    var i = 0
    do {
        //load bathroom
        var div = document.createElement('post')
        div.setAttribute('id',i)
        document.getElementById('post').appendChild(div)
        //load toilet eject seat
        var post = document.createElement('a')
        post.setAttribute('href',blog.post[i].link)
        post.setAttribute('id','link' + i)
        document.getElementById(i).appendChild(post)
        //load toilet
        post = document.createElement('t')
        post.innerHTML = blog.post[i].title
        document.getElementById('link' + i).appendChild(post)
        document.getElementById(i).appendChild(document.createElement('br'))
        //load paper
        var post = document.createElement('p')
        post.innerHTML = blog.post[i].text
        document.getElementById(i).appendChild(post)
        document.getElementById(i).appendChild(document.createElement('br'))
        console.log(i)

        i = i + 1
    } while ( i < blog.post.length )
}