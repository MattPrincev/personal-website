// 2. add projects (update github too?)

document.addEventListener("DOMContentLoaded", initial_check());

function initial_check() {
    var bod = document.querySelector("body");
    var forg = document.getElementById("forg");
    var mrs = document.getElementById("mrs")
    if(localStorage.getItem("theme") == "frog"){
        localStorage.setItem("theme", "frog");
        bod.classList.toggle("frog");
        forg.src = "resources/images/forg-on.png"
        mrs.innerHTML = "(⚈₋₍⚈)"
    }
    else{
        localStorage.setItem("theme", "blue");
        forg.src = "resources/images/forg-off.png"
        mrs.innerHTML = "ฅ^•ﻌ•^ฅ<"
    }
 }

function toggle_style() {
    var bod = document.body;
    var forg = document.getElementById("forg");
    var mrs = document.getElementById("mrs")
    if(localStorage.getItem("theme") == "frog"){
        bod.classList.toggle("frog");
        localStorage.setItem("theme", "blue");
        forg.src = "resources/images/forg-off.png" 
        mrs.innerHTML = "ฅ^•ﻌ•^ฅ<"
    }
    else{
        bod.classList.toggle("frog");
        localStorage.setItem("theme", "frog");
        forg.src = "resources/images/forg-on.png"
        mrs.innerHTML = "(⚈₋₍⚈)"
    }
 }


 document.addEventListener("DOMContentLoaded", initial_cat());

function initial_cat(){
    var cat = document.getElementById("koshka")
    if(localStorage.getItem("status") == "awake"){
        localStorage.setItem("status", "awake")
        cat.src = "resources/images/running-kot.gif"
    }
    else{
        localStorage.setItem("status", "asleep")
        cat.src = "resources/images/nRq.gif"
        cat.classList.toggle("asleep");
        cat.classList.toggle("awake");
    }
}

function cat_toggle(){
    var cat = document.getElementById("koshka")
    if(localStorage.getItem("status") == "awake"){
        localStorage.setItem("status", "asleep")
        cat.src = "resources/images/nRq.gif"
        cat.classList.toggle("asleep");
        cat.classList.toggle("awake");
}
    else{
        localStorage.setItem("status", "awake")
        cat.src = "resources/images/running-kot.gif"
        cat.classList.toggle("asleep");
        cat.classList.toggle("awake");
    }
 }

function scroll_to(location){
    if(location == "home") {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    if(location == "about"){
        window.scrollTo({top: (window.innerHeight)*.8, behavior: 'smooth'});
    }
    if(location == "projects"){
        window.scrollTo({top: (window.innerHeight)*2.2, behavior: 'smooth'});
    }
    if(location == "contact"){
        window.scrollTo({top: (window.innerHeight)*3.7, behavior: 'smooth'});
    }
 }

 
document.addEventListener("DOMContentLoaded", initial_language());

function initial_language(){
    if(localStorage.getItem("language") == "english"){
        localStorage.setItem("language", "english")
        toggle_english()
    }
    else if(localStorage.getItem("language") == "spanish"){
        localStorage.setItem("language", "spanish")
        toggle_spanish()
    }
    else if(localStorage.getItem("language") == "japanese"){
        localStorage.setItem("language", "japanese")
        toggle_japanese()
    }
    else{
        localStorage.setItem("language", "english")
        toggle_english()
    }
}

function toggle_language(language){
    if(language == "english"){
        localStorage.setItem("language", "english")
        toggle_english()
    }
    else if(language == "spanish"){
        localStorage.setItem("language", "spanish")
        toggle_spanish()
    }
    else if(language == "japanese"){
        localStorage.setItem("language", "japanese")
        toggle_japanese()
    }
    else{
        localStorage.setItem("language", "english")
        toggle_english()
    }
}

function toggle_english(){
    // navbar
    language = document.getElementsByClassName("dropbtn")
    language[0].innerHTML = "Language"

    // home page
    greeting = document.getElementsByClassName("greeting")
    greeting[0].innerHTML = "Howdy! I'm Matt Princev"
    me = document.getElementsByClassName("me")
    me[0].innerHTML = "I'm a software developer based in Minnesota <span id='mrs'> ฅ^•ﻌ•^ฅ </span>"

    // about me
    about_me = document.getElementById("about-me")
    about_me.innerHTML = "About Me"
    about_me_p = document.getElementById("about-me-p")
    about_me_p.innerHTML = "Here, you'll discover additional details about me, what I like to do, and my skills related to programming and technology"
    know_me = document.getElementById("know-me")
    know_me.innerHTML = "Get to know me!"
    know_p1 = document.getElementById("know-p1")
    know_p1.innerHTML = "I've recently completed a Bachelor's degree in Computer Science at the University of Minnesota, aspiring to become a proficient developer, capable and enthusiastic about working on both the front end and back end of applications."
    know_p2 = document.getElementById("know-p2")
    know_p2.innerHTML = "Through my academic journey and practical involvement in software development, I've acquired a robust set of skills and a deep understanding of the intricacies involved in creating functional and innovative solutions. This blend of theoretical knowledge and real-world application has equipped me with the adaptability, problem-solving abilities, and technical proficiency required for success in software development roles."
    know_p3 = document.getElementById("know-p3")
    know_p3.innerHTML = "I'm open to job oppurtunities where I can make meaningful contributions, continue learning, and grow as a person. If there's a suitable opportunity that aligns with my skills and experience, feel free to reach out by contacting me through my <b>contact page</b>."
    spanish = document.getElementById("spanish")
    spanish.innerHTML = "Spanish (Fluent)"
    japanese = document.getElementById("japanese")
    japanese.innerHTML = "Japanese (Intermediate)"
    russian = document.getElementById("russian")
    russian.innerHTML = "Russian (Beginner)"

    // projects page
    project_h2 = document.getElementById("project-h2")
    project_h2.innerHTML = "Projects"
    project_p = document.getElementById("project-p")
    project_p.innerHTML = "Here are a couple of my favorite projects"
    bowling_h3 = document.getElementById("bowling-h3")
    bowling_h3.innerHTML = "VR Bowling Simulator"
    bowling_p = document.getElementById("bowling-p")
    bowling_p.innerHTML = "This project, created with Godot, offers users an immersive bowling experience in VR. Notably, it introduces a unique feature allowing players to adjust the weight and size of the bowling ball, enhancing the realism and customization within the simulation. Additionally, it includes the unique feature of launching balls at distances beyond what is achievable in real life."
    blog_h3 = document.getElementById("blog-h3")
    blog_h3.innerHTML = "Microblogging Platform"
    blog_p = document.getElementById("blog-p")
    blog_p.innerHTML = "I developed a microblogging website as part of a class project and expanded upon it afterward. This expansion included features such as a liking system, profile customization, the ability to post, delete one's own posts, edit posts, and much more."

    // contact page
    contact_h2 = document.getElementById("contact-h2")
    contact_h2.innerHTML = "Contact"
    contact_p = document.getElementById("contact-p")
    contact_p.innerHTML = "Please don't hesitate to reach out by filling out the form below, and I'll get back to you as soon as possible."
    // form
    name_label = document.getElementById("name-label")
    name_label.innerHTML = "Name"
    name_input = document.getElementById("name-input")
    name_input.placeholder = "Enter your name"
    email_label = document.getElementById("email-label")
    email_label.innerHTML = "Email"
    email_input = document.getElementById("email-input")
    email_input.placeholder = "Enter your email"
    message_label = document.getElementById("message-label")
    message_label.innerHTML = "Message"
    message_input = document.getElementById("message-input")
    message_input.placeholder = "Enter your message here 〵(^ o ^)〴"
    submit = document.getElementById("submit")
    submit.value = "Submit"





    // contact = document.getElementById("contact")
    // contact.innerHTML = "contact"
    // projects = document.getElementById("projects")
    // projects.innerHTML = "projects"
    // about = document.getElementById("about")
    // about.innerHTML = "about"

}

function toggle_spanish(){
    // navbar
    language = document.getElementsByClassName("dropbtn")
    language[0].innerHTML = "Lenguaje"

    // home page
    greeting = document.getElementsByClassName("greeting")
    greeting[0].innerHTML = "¡Hola! Soy Matt"
    me = document.getElementsByClassName("me")
    me[0].innerHTML = "Soy un desarrollador de software que vive en Minnesota <span id='mrs'> ฅ^•ﻌ•^ฅ </span>"

    // about me
    about_me = document.getElementById("about-me")
    about_me.innerHTML = "sobre mí"
    about_me_p = document.getElementById("about-me-p")
    about_me_p.innerHTML = "Aquí descubrirás detalles adicionales sobre mí, lo que me gusta hacer y mis habilidades relacionadas con la programación y la tecnología"
    know_me = document.getElementById("know-me")
    know_me.innerHTML = "¡conózcame!"
    know_p1 = document.getElementById("know-p1")
    know_p1.innerHTML = "Recientemente he terminado una licenciatura en Informática en la Universidad de Minnesota, con la aspiración de convertirme en un desarrollador competente, capaz y entusiasta de trabajar tanto en el front-end como en el back-end de las aplicaciones."
    know_p2 = document.getElementById("know-p2")
    know_p2.innerHTML = "Gracias a mi trayectoria académica y a mi implicación práctica en el desarrollo de software, he adquirido un sólido conjunto de habilidades y un profundo conocimiento de los entresijos que implica la creación de soluciones funcionales e innovadoras. Esta combinación de conocimientos teóricos y aplicación en el mundo real me ha dotado de la adaptabilidad, la capacidad de resolución de problemas y la competencia técnica necesarias para desempeñar con éxito funciones de desarrollo de software."
    know_p3 = document.getElementById("know-p3")
    know_p3.innerHTML = "Estoy abierto a oportunidades de trabajo en las que pueda hacer contribuciones significativas, seguir aprendiendo y crecer como persona. Si hay una oportunidad adecuada que se alinee con mis habilidades y experiencia, no dude en ponerse en contacto conmigo a través de mi <b>página de contacto</b>."
    spanish = document.getElementById("spanish")
    spanish.innerHTML = " Español (Fluido)"
    japanese = document.getElementById("japanese")
    japanese.innerHTML = "Japonés (Intermedio)"
    russian = document.getElementById("russian")
    russian.innerHTML = "Ruso (Principiante)"

    // projects page
    project_h2 = document.getElementById("project-h2")
    project_h2.innerHTML = "Proyectos"
    project_p = document.getElementById("project-p")
    project_p.innerHTML = "Aquí hay un par de mis proyectos favoritos"
    bowling_h3 = document.getElementById("bowling-h3")
    bowling_h3.innerHTML = "Simulador de bolos en RV"
    bowling_p = document.getElementById("bowling-p")
    bowling_p.innerHTML = "Este proyecto, creado con Godot, ofrece a los usuarios una experiencia inmersiva de bolos en RV. En particular, introduce una función única que permite a los jugadores ajustar el peso y el tamaño de la bola de bolos, mejorando el realismo y la personalización dentro de la simulación. Además, incluye la función exclusiva de lanzar bolas a distancias superiores a las que se pueden alcanzar en la vida real."
    blog_h3 = document.getElementById("blog-h3")
    blog_h3.innerHTML = "Plataforma de microblogging"
    blog_p = document.getElementById("blog-p")
    blog_p.innerHTML = "Desarrollé un sitio web de microblogging como parte de un proyecto de clase y lo amplié después. Esta ampliación incluía funciones como un sistema de 'me gusta', personalización del perfil, la posibilidad de publicar, borrar las propias publicaciones, editarlas y mucho más."

    // contact page
    contact_h2 = document.getElementById("contact-h2")
    contact_h2.innerHTML = "Contacto"
    contact_p = document.getElementById("contact-p")
    contact_p.innerHTML = "No dude en ponerse en contacto conmigo rellenando el siguiente formulario y le responderé lo antes que puedo."
    // form
    name_label = document.getElementById("name-label")
    name_label.innerHTML = "Nombre"
    name_input = document.getElementById("name-input")
    name_input.placeholder = "Introduzca su nombre"
    email_label = document.getElementById("email-label")
    email_label.innerHTML = "Correo Electrónico"
    email_input = document.getElementById("email-input")
    email_input.placeholder = "Introduzca su correo electrónico"
    message_label = document.getElementById("message-label")
    message_label.innerHTML = "Mensaje"
    message_input = document.getElementById("message-input")
    message_input.placeholder = "Introduzca su mensaje aquí 〵(^ o ^)〴"
    submit = document.getElementById("submit")
    submit.value = "Envíe"


    // contact = document.getElementById("contact")
    // contact.innerHTML = "contacto"
    // projects = document.getElementById("projects")
    // projects.innerHTML = "proyectos"
    // about = document.getElementById("about")
    // about.innerHTML = "sobre"
}

function toggle_japanese(){
    // navbar
    language = document.getElementsByClassName("dropbtn")
    language[0].innerHTML = "言語"

    // home page
    greeting = document.getElementsByClassName("greeting")
    greeting[0].innerHTML = "こんにちは！マットです"
    me = document.getElementsByClassName("me")
    me[0].innerHTML = "ミネソタに住むソフトウェアデベロッパーです<span id='mrs'> ฅ^•ﻌ•^ฅ </span>"

    // about me
    about_me = document.getElementById("about-me")
    about_me.innerHTML = "私について"
    about_me_p = document.getElementById("about-me-p")
    about_me_p.innerHTML = "ここでは、私についての詳細、私の好きなこと、プログラミングとテクノロジーに関連するスキルをご覧いただけます。"
    know_me = document.getElementById("know-me")
    know_me.innerHTML = "私についてもっと知る！"
    know_p1 = document.getElementById("know-p1")
    know_p1.innerHTML = "ミネソタ大学でコンピュータサイエンスの学士号を取得し、アプリケーションのフロントエンドとバックエンドの両方に携わることができ、熱心な熟練開発者になることを目指しています。"
    know_p2 = document.getElementById("know-p2")
    know_p2.innerHTML = "学問の旅とソフトウェア開発への実践的な関わりを通して、私は機能的で革新的なソリューションの作成に関わる一連のスキルと複雑さへの深い理解を身につけました。理論的な知識と実社会での応用の融合により、ソフトウェア開発で成功するために必要な適応力、問題解決能力、技術的な熟練度を身につけることができました。"
    know_p3 = document.getElementById("know-p3")
    know_p3.innerHTML = "私は、有意義な貢献をし、学び続け、人間として成長できる仕事の機会を求めています。私のスキルや経験に適した機会がありましたら、お気軽に<b>お問い合わせページ</b>からご連絡ください。"
    spanish = document.getElementById("spanish")
    spanish.innerHTML = "スペイン語（流暢）"
    japanese = document.getElementById("japanese")
    japanese.innerHTML = "日本語（中級）"
    russian = document.getElementById("russian")
    russian.innerHTML = "ロシア語 (初級)"

    // projects page
    project_h2 = document.getElementById("project-h2")
    project_h2.innerHTML = "プロジェクト"
    project_p = document.getElementById("project-p")
    project_p.innerHTML = "ここに好きなプロジェクトがあります"
    bowling_h3 = document.getElementById("bowling-h3")
    bowling_h3.innerHTML = "VR ボウリング"
    bowling_p = document.getElementById("bowling-p")
    bowling_p.innerHTML = "Godotと使ったプロジェクトは、VRで没入感のあるボウリング体験をユーザーに提供します。特筆すべきは、プレイヤーがボウリングボールの重さや大きさを調整できるユニークな機能を導入し、シミュレーション内のリアリズムとカスタマイズ性を高めていることです。あと、現実では実現不可能な距離でボールを発射できるユニークな機能も搭載しています。"
    blog_h3 = document.getElementById("blog-h3")
    blog_h3.innerHTML = "マイクロブログ・プロジェクト"
    blog_p = document.getElementById("blog-p")
    blog_p.innerHTML = "授業の一環としてマイクロブログのウェブサイトを開発し、その後それを拡張しました。この拡張には、「いいね！」システム、プロフィールのカスタマイズ、投稿、自分の投稿の削除、投稿の編集などの機能が含まれていました。"

    // contact page
    contact_h2 = document.getElementById("contact-h2")
    contact_h2.innerHTML = "連絡"
    contact_p = document.getElementById("contact-p")
    contact_p.innerHTML = "私に連絡を取りたい方は、以下のフォームです。"
    // form
    name_label = document.getElementById("name-label")
    name_label.innerHTML = "名前"
    name_input = document.getElementById("name-input")
    name_input.placeholder = "名前を入力してください"
    email_label = document.getElementById("email-label")
    email_label.innerHTML = "電子メール"
    email_input = document.getElementById("email-input")
    email_input.placeholder = "電子メールを入力してください"
    message_label = document.getElementById("message-label")
    message_label.innerHTML = "メッセージ"
    message_input = document.getElementById("message-input")
    message_input.placeholder = "ここにメッセージを入力してください 〵(^ o ^)〴"
    submit = document.getElementById("submit")
    submit.value = "送信"
    



    // contact = document.getElementById("contact")
    // contact.innerHTML = "コンタクト"
    // projects = document.getElementById("projects")
    // projects.innerHTML = "プロジェクト"
    // about = document.getElementById("about")
    // about.innerHTML = "について"
}
