//DONOTDELETEIDIOTJULIAIKNOWWHATURTHINKINGRN
function load(blog) {
    var i = 0
    do {
        //load bathroom
        var div = document.createElement('post')
        div.setAttribute('id',i)
        document.getElementById('post').appendChild(div)
        //load toilet eject seat
        var link = document.createElement('a')
        link.setAttribute('href',blog.post[i].link)
        link.setAttribute('id','link' + i)
        document.getElementById(i).appendChild(link)
        //load toilet
        var title = document.createElement('t')
        title.innerHTML = blog.post[i].title
        document.getElementById('link' + i).appendChild(title)
        document.getElementById(i).appendChild(document.createElement('br'))
        //load paper
        var post = document.createElement('p')
        post.innerHTML = blog.post[i].text
        document.getElementById(i).appendChild(post)
        document.getElementById(i).appendChild(document.createElement('br'))

        i = i + 1
    } while ( i < blog.post.length )
}