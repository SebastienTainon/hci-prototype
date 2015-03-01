$(function() {
    // https://github.com/Stereobit/dragend
    $(".draggable" ).draggable();

    $('ul.article-list li').hammer().bind("panleft panright",  function(ev) {
        console.log(ev.type +" gesture detected.");
    });

    $('ul.article-list li.slidable').each(function(ev) {
        $(this).attr('data-height', $(this).css('height'));
    });

    $('ul.article-list li.slidable').hammer().bind("tap",  function(ev) {
        var $self = $(this);

        if ($(this).find('.summary').css('display') === 'none') {
        	$(this).find('.summary').slideDown({
                complete: function() {
                    $self.attr('data-height', $self.css('height'));
                }
            });
        } else {
        	$(this).find('.summary').slideUp({
                complete: function() {
                    $self.attr('data-height', $self.css('height'));
                }
            });
        } 	
    });

    $('ul.favourite-articles li.slidable').hammer().bind("tap",  function(ev) {
        var $self = $(this);

        if ($(this).find('.summary').css('display') === 'none') {
            $(this).find('.summary').slideDown({
                complete: function() {
                    $self.attr('data-height', $self.css('height'));
                }
            });
        } else {
            $(this).find('.summary').slideUp({
                complete: function() {
                    $self.attr('data-height', $self.css('height'));
                }
            });
        }   
    });

    $('ul.article-list li.slidable').hammer().bind("panleft",  function(ev) {
        $(this).css('height', $(this).attr('data-height'));
        $(this).animate({backgroundColor: "red"}, { duration: 400, queue: false });
        $(this).hide("slide", { direction: "left" }, 700);
    });

    $('ul.favourite-articles li.slidable').hammer().bind("panleft",  function(ev) {
        $(this).css('height', $(this).attr('data-height'));
        $(this).animate({backgroundColor: "red"}, { duration: 400, queue: false });
        $(this).hide("slide", { direction: "left" }, 700);
    });


    $('ul.favourite-articles li.slidable').hammer().bind("panright",  function(ev) {
        $(this).css('height', $(this).attr('data-height'));
        $(this).hide("slide", { direction: "right" }, 700, function() {
            $('ul.favourite-articles').hide();
            var id = $(this).attr('article-number');
            $('#article' + id).show("slide", { direction: "left" }, 200);
            $(this).show();
        });
    });

    $('ul.article-list li.slidable').hammer().bind("panright",  function(ev) {
        $(this).css('height', $(this).attr('data-height'));
        $(this).animate({backgroundColor: "green"}, { duration: 400, queue: false });
        $(this).hide("slide", { direction: "right" }, 700, function() {
            $('ul.article-list').hide();
            var id = $(this).attr('id');
            $('#article' + id).show("slide", { direction: "left" }, 200);
            $('#favourite' + id).show();
        });
    });

    $('#back-button').on('click', function(ev) {
        if ($('ul.article-list').css('display') === 'none') {
            $('.article').hide();
            $('ul.favourite-articles').hide();
            $('ul.article-list').show("slide", { direction: "right" }, 200);

        } 
    });

    $('#home-button').on('click', function(ev) {
        if ($('ul.article-list').css('display') === 'none') {
            $('.article').hide();
            $('ul.favourite-articles').hide();
            $('ul.article-list').show("slide", { direction: "right" }, 200);
        }
    });

    $('#favourite-button').on('click', function(ev) {
        $('ul.article-list').hide();
        $('.article').hide();
        $('ul.favourite-articles').show("slide", { direction: "left" }, 200);
    });

});

angular.module('app', [])
    .controller('ArticleCtrl', function() {
        var articles = this;

        articles.data = [
            {
                title: "Le ministre grec des Finances déclare la guerre aux riches",
                summary: "Grèce. Le ministre grec des Finances Yanis Varoufakis n'a pas exclu samedi l'adoption d'«une taxe extraordinaire» pour «ceux qui peuvent payer» afin d'assurer des budgets à l'équilibre.",
                content: "«Nous nous sommes engagés à avoir des budgets à l'équilibre. Si je suis contraint d'imposer une taxe extraordinaire, je le ferai mais ce sera pour ceux qui peuvent payer (...), on ne va pas demander de l'argent à ceux qui souffrent», a déclaré le ministre lors d'un entretien à la télévision grecque Skaï. «On s'intéresse à ceux qui disposent de l'argent et ils n'ont jamais payé. Ils sont notre cible et on sera impitoyable», a-t-il ajouté.\n\n«On veut trouver une solution pour faire payer ceux qui ont de l'argent», a-t-il insisté. Le ministre a notamment souhaité que les partenaires européens «aident la Grèce s'agissant de leurs propres compagnies (qui échappent à l'impôt, ndlr) et pas seulement pour nous donner des leçons».\n\n«Une banque-poubelle»\n\nLe Premier ministre Alexis Tsipras a annoncé vendredi soir un premier train de mesures pour lutter contre l'évasion fiscale et accroître les recettes de l'Etat en incitant les contribuables à payer une partie de leurs arriérés.\n\nM. Varoufakis a également évoqué le problème de créances douteuses, qui pèsent sur le budget des banques. Selon lui, la solution serait d'utiliser les 11 milliards d'euros contenus dans le Fonds hellénique de stabilité financière et qui sont destinés aux banques pour la création «d'une 'banque-poubelle' qui va absorber ces créances (...) et permettra aux banques de prêter aux entreprises» et résoudre le problème de liquidités sur le marché. (ats/Newsnet)",
                tags: ["finance", "grece"]
            },
            {
                title: "Google : chez Apple, tout est cher et c'est un \"peu irresponsable\"",
                summary: "Business : Pour Tim Cook, Google en fait trop avec les données des utilisateurs. Dans Forbes, le patron d'Android riposte. Pour Sundar Pichai, Apple se montre un peu irresponsable avec des produits trop chers, quand Google se montre au contraire responsable avec de nombreux services gratuits.",
                content: "Cette semaine, c'est au patron d'Android, Sundar Pichai de répliquer dans une interview accordée à Forbes. \"Les utilisateurs utilisent nos services par choix […] Nous avons de très nombreux produits qui comptent plus d'un milliard d'utilisateurs. Ils apportent beaucoup de valeur. Et nous fournissons nombre de ces services gratuitement\" répond d'abord le dirigeant.\n\nEn clair, ces produits sont plébiscités par les internautes et utilisés en connaissance de cause. \"La majorité des utilisateurs, si vous leur demandez, sont à l'aise avec la façon dont ils fonctionnent\" assure Sundar Pichai, en référence à la monétisation des données en contrepartie de la gratuité.\n\nVoilà pour la réponse sur le principe d'exploitation des données. Mais le directeur d'Android n'en oublie pas pour autant de s'attaquer au modèle Apple, qui selon Tim Cook consiste donc à vendre les \"meilleurs produits et services au monde\".",
                tags: ["Apple", "google", "android"]
            },
            {
                title: "L’Apple Watch servira aussi de clef de voiture",
                summary: "Avant sa prochaine Keynote, Apple communique sur les prochaines fonctionnalités de sa Watch. Elle pourrait remplacer les clés de voiture.",
                content: "Dans la récente interview donnée au quotidien britannique The Telegraph, Tim Cook s’est quelque peu exprimé sur des futures fonctionnalités de l’Apple Watch. De quoi susciter l’émoi des fans de la marque à la pomme avant la prochaine keynote prévue à San Francisco pour le 9 mars.\n\nUne keynote centrée essentiellement sur l’Apple Watch\n\nLa prochaine conférence de presse donnée par Apple s’appelle Spring Forward. Sa date du 9 mars, lendemain du passage à l’heure d’été aux Etats-Unis, a sans aucun doute été choisie à dessein car cette conférence de presse devrait être essentiellement centrée sur le sujet de l’Apple Watch et de ses fonctionnalités futures.\n\nOn connait déjà son aspect et ses fonctionnalités de base. On sait également que son autonomie sera sans doute suffisante pour un usage quotidien. Mais le directeur général d’Apple a expliqué que la montre connectée se montrera généreuse avec les utilisateurs les plus actifs. En d’autres termes, au travers de ses capteurs d’activité physique, l’Apple Watch récompensera les utilisateurs qui auront une activité sportive régulière en offrant sans doute des crédits App Store ou iTune Store. De quoi donner envie d’être plus actif.\n\nLe système de filtrage des notifications de la montre Apple sera efficace car il permettra de sélectionner avec précision ce qui sera diffusé ou non par l’Apple Watch en fonction de différents modes (normal, réunion, etc.). Il sera aussi possible d’effectuer des achats électroniques directement depuis la montre connectée.\n\nApple Watch : une clef de voiture à votre poignet\n\nApple a récemment déposé un brevet de méthode d’ouverture/fermeture/démarrage de voiture avec l’iPhone. Il y a donc fort à parier que cette fonction sera également activable depuis la montre connectée, ce qui la transformera en véritable clef de voiture. Des questions se posent encore sur les futurs accords passés avec les grands constructeurs automobiles ainsi que sur les possibles problèmes liés à l’autonomie de l’Apple Watch, questions qui trouveront peut-être des réponses le 9 mars prochain.",
                tags: ["Apple", "Apple Watch", "objets connectés"]
            },
            {
                title: "Paris ouvre grand ses portes à Airbnb qui promet de verser la taxe de séjour",
                summary: "En visite à Paris, Brian Chesky, patron du site américain de location touristique collaborative, a rencontré des représentants de la mairie de Paris pour évoquer, entre autres, la taxe de séjour que Airbnb devra reverser.",
                content: "Airbnb veut montrer sa bonne volonté dans la Ville Lumière. Le principe du versement de la taxe de séjour par le site américain avait été acté en novembre dernier par les députés français. Lors de sa visite à Paris, ce jeudi, Brian Chesky, le PDG et fondateur du site, a confirmé que son entreprise se chargerait de sa collecte puis de son versement.\n\nParis, premier parc du monde pour Airbnb\n\nL'entreprise a de bonnes raisons de vouloir se montrer conciliant dans la capitale française: elle la présente en effet comme sa toute première destination dans le monde. En tout, 40.000 solutions d'hébergements sont proposées sur Airbnb en Île-de-France pour 1,8 million de visiteurs chaque année. Le nombre de nuitées que cela représente reste tenu secret.\n\nParis, de son côté, ne cache l'intérêt que représente Airbnb. \"L'offre de logements est un outil important pour l'attractivité de Paris\", a affirmé Bruno Julliard, hôte du jour de Brian Chesky à l'Hôtel de Ville. Le premier adjoint au maire de Paris, aussi chargé de la Culture, du Patrimoine et des Entreprises culturelles, évaluant le prix moyen de la nuitée dans un hôtel à 175 euros, a ajouté que:\n\n\"Airbnb est devenue une offre essentielle d'hébergement à Paris, notamment pour les plus jeune. Ça répond aussi à un déficit de chambre d'hôtels.\"\n\nPour combler le manque, la maire de Paris a promis la création de 12.000 chambres supplémentaires à Paris. Mais '\"ce ne sera pas suffisant\", a reconnu l'ancien militant étudiant. Ce jeudi, la mairie a même organisé une rencontre entre Brian Chesky et de jeunes entrepreneurs.\n\nConcurrence pour les hôteliers\n\nPourtant, tout n'est bien sûr pas si rose. Car si la multinationale américaine est parvenue en quelques années à se faire une place dans l'industrie du Tourisme en France et à Paris en particulier, cela n'a bien sûr pas été sans susciter la colère des hôteliers, ceux-ci lui reprochant une concurrence déloyale. Comme dans d'autres villes du monde, ce sont surtout les hôtes \"professionnels\", ceux qui louent leurs logements à l'année ou presque, qui sont pointés du doigt.\n\nD'autant plus que ces \"meublés touristiques\" non déclarés, encourageant la spéculation, se sont multipliés dans un contexte déjà très tendu pour l'immobilier parisien. Paris a durci les restrictions pour obtenir l'autorisation préalable normalement obligatoire pour louer une résidence secondaire sur de longues périodes de l'année. Désormais, l'espace ainsi occupé doit être compensé par une offre de logement classique de taille équivalente dans le même arrondissement.\n\nDix contrôleurs à Paris\n\nToute la difficulté reste bien sûr d'effectuer les contrôles, compte tenu de la quantité d'offres disponibles, sur Airbnb en particulier. Dix personnes sont employées à plein temps à cette tâche à Paris, selon un responsable de la mairie qui reconnaît l'impossibilité pour eux de détecter tous les contrevenants.\n\nParis a donc choisi de faire confiance au groupe américain pour débusquer ceux qui ont dépassé l'accueil \"sur leur canapé\" pour tirer de la location sur Airbnb une vraie source de profit. Pour l'heure, le montant précis de la taxe ainsi collectée et les modalités de la collecte n'ont pas été dévoilés. \"Je ne vous indiquerai pas les montants car ils sont trop complexe pour moi\", a répondu Bruno Julliard lors d'une conférence de presse.\n\nEn revanche, l'adjoint à la maire de Paris a insisté sur l'organisation à la Villette du prochaine Airbnb Open, le grand raout des hôtes du site. Il en attend 6.000 en novembre prochain.",
                tags: ["Paris", "Airbnb", "taxe"]
            },
            {
                title: "Climat : Hollande fait son service après-vente auprès des Philippins",
                summary: "Avec François Hollande, même quand il s'agit de climat, le prisme économique n'est jamais loin. Au second jour de son déplacement aux Philippines, le chef de l'Etat avait choisi d'illustrer, en faisant arrêt à Guiuan, port de pêche ravagé par le typhon Haiyan en 2013, la capacité de « résilience » du pays hôte.",
                content: "Un mot bric-à-brac, répété à l'envi lors de ces quarante-huit heures, qui permet d'évoquer les drames liés aux réchauffement climatique, mais aussi d'envisager l'étape d'après, celle de la reconstruction, génératrice de croissance et d'investissements.\n\nLors de sa déambulation dans cette ville côtière de 47 000 habitants, François Hollande a pu constater par lui-même les stigmates encore visibles de la tempête qui a détruit la quasi-totalité des habitations. Les ruines de l'église du village, superbe ouvrage du XVIe siècle, témoignent de la violence des éléments. Sur le port, les cases des pêcheurs sont quasiment toutes bâchées avec des toiles marquées du sceau du Haut-Commissariat des Nations unies pour les réfugiés. Au cœur de la foule rassemblée dans la cour de la principale école de la ville, beaucoup de Philippins arborent les tee-shirts colorés des grandes ONG venues participer à la reconstruction de la ville. Le président s'est adressé aux habitants :\n\n« Je voulais montrer au monde entier ce qu'était votre courage, ce qu'était votre force, votre capacité de résilience : ici vous avez subi, mais ici vous avez agi. »\n\nEt d'ajouter : « Il faut reconstruire en évitant de nouveaux drames. Notre responsabilité, ce n'est pas seulement de vous aider, c'est d'éviter que cela se reproduise. » En conclusion, le chef de l'Etat tente même quelques mots dans un anglais poussif, qui rappelle celui de ses prédécesseurs. Mais le discours est bien accueilli par une foule ravie de l'intérêt porté à la ville. François Hollande s'affiche qui plus est à la tribune avec le maire de la ville, Christopher Sheen Gonzales, célébré en héros par le pays pour son attitude lors du passage du typhon. Peu avant, il a annoncé une contribution de 1,5 million d'euros à l'ONG française Acted, impliquée dans la reconstruction de la ville.",
                tags: ["François Hollande", "climat"]
            },
            {
                title: "Fin de série pour l’OL",
                summary: "Après 11 journées sans revers en L1, Lyon a connu la défaite, ce samedi à Lille, dans le cadre de la 27e levée (2-1). Au lendemain de la faillite marseillaise devant Caen, les Gones n’ont pas su prendre leurs aises en tête de l’élite.",
                content: "Depuis leur naufrage à Saint-Etienne le 30 novembre dernier (3-0), jamais plus les Lyonnais n’étaient tombés en Ligue 1. Ce samedi c’est donc de très haut, d’une série d’invincibilité de 11 matches, que les Rhodaniens ont chuté – alors que l’occasion leur était donnée de conforter leur leadership aux dépens notamment d’un OM en nette perte de vitesse. Malgré la présence en pointe du talisman Lacazette, malgré un ascendant rapidement pris au score, les Gones ont été renversés sur la pelouse du stade Pierre-Mauroy, là où le Losc n’avait plus gagné – et marqué – depuis le 10 janvier.\n\nPourtant les hommes de René Girard ont réalisé une première période particulièrement indigente, raccompagnés aux vestiaires par les sifflets de leurs supporters et avec un but de retard au tableau d’affichage – un minimum. La meilleure défense de l’élite à domicile (5 petits buts encaissés seulement avant cette rencontre) avait craqué dès la 3e minute face à la meilleure attaque du championnat, surprise sur un corner de Fekir repris victorieusement par Tolisso (0-1, 3e). La douche froide pour des Dogues incapables dès lors de réagir avant la pause…",
                tags: ["Olympique Lyonais", "football", "Saint-Etienne", "sport"]
            },
            {
                title: "Combiné nordique : médaille d'or pour François Braud et Jason Lamy Chappuis",
                summary: "La France conserve son titre de championne du monde de sprint du combiné nordique après la victoire de François Braud et Jason Lamy Chappuis devant l'Allemagne et la Norvège, samedi 28 février à Falun (Suède), lors des Mondiaux de ski nordique. Il s'agit de la sixième médaille française de ces Mondiaux-2015, la première en or et la quatrième en combiné.",
                content: "La France conserve son titre de championne du monde de sprint du combiné nordique après la victoire de François Braud et Jason Lamy Chappuis devant l'Allemagne et la Norvège, samedi 28 février à Falun (Suède), lors des Mondiaux de ski nordique. Il s'agit de la sixième médaille française de ces Mondiaux-2015, la première en or et la quatrième en combiné.\n\nLamy Chappuis et Braud se sont élancés en tête de la course de fond (5x1,5 km chacun) grâce à leurs performances en saut. Le duo possédait 11 secondes d'avance sur le Japon et 21 secondes sur leurs adversaires potentiellement les plus redoutables, les Allemands Johannes Rydzek et Eric Frenzel. Les deux Français, jamais inquiété lors de leurs quatre premiers relais, ont toutefois tremblé dans les derniers hectomètres suite à un dernier relais impressionnant de Frenzel. Mais Lamy Chappuis a maîtrisé son sprint, s'imposant avec 2 sec 7/10e d'avance sur son dauphin. \n\nComme à Val di Fiemme il y a quatre ans, la France a décroché une médaille dans chacune des quatre spécialités du combiné. Outre l'or de samedi, il y a l'argent au grand tremplin avec François Braud, et deux fois le bronze grâce à Jason Lamy Chappuis, au petit tremplin individuel et au relais par équipes. Grâce aux médailles d'argent (Maurice Manificat au 15 km) et de bronze (relais par équipes) du ski de fond, la France totalise actuellement six médailles lors de ces Championnats du monde qui se terminent dimanche. C'est un total inédit pour les Bleus lors de Mondiaux. Il y a deux ans, ils avaient décroché quatre médailles, dont trois en or, mais uniquement en combiné.\n\n« JE ME RETIRE SUR UN TITRE »\n\nDimanche, l'ultime épreuve au programme, le 50 km messieurs (style libre) offre la possibilité d'une dernière médaille tricolore vu l'état de forme affiché par Maurice Manificat.\n\nMais avant cela, Jason Lamy Chappuis a annoncé qu'il mettait fin à sa carrière à la fin de cette saison : « J'ai une annonce à faire : c'est que j'arrête à la fin de cette saison. Je me retire sur un titre », a-t-il déclaré en zone d'interview. A 28 ans, celui qui détient notamment un titre olympique (Vancouver 2010), devrait donc encore participer aux trois dernières manche de la Coupe du monde (Lahti, Trondheim et Oslo) avant de raccrocher mi-mars.",
                tags: ["France", "sprint nordique", "champion du monde", "sport"]
            },
            {
                title: "Nestlé retire des boîtes de Ricoré contenant du lait",
                summary: "Un lot de la célèbre marque de café Ricoré commercialisée par le géant suissse Nestlé a été retiré de la vente en France, suite à une erreur de conditionnement.",
                content: "Un lot de boîtes de 260 g de la marque Ricoré, \"l'ami du petit déjeuner\" a été retiré de la vente par le groupe Nestlé France. Les produits incriminés contiendraient du lait, alors que cet aliment n’est pas mentionné dans la liste des ingrédients.\n\nDes risques pour les allergiques au lait\n\nIl n'y aurait à priori pas de réel danger  pour les consommateurs, sauf pour les personnes qui présentent une intolérance ou une allergie au lactose. Dans un communiqué, Nestlé leur recommande donc de ne pas consommer les boîtes correspondant numéro de lot 50220835F1. \"Ce défaut de conditionnement ne remet pas en cause la qualité du produit concerné, qui correspond à la recette Ricoré au lait et qui peut donc être consommé par les personnes ne présentant pas d'allergie au lait\", ajoute le groupe agroalimentaire\n\nUn numéro vert (0800 22 32 42) est mis à la disposition des consommateurs souhaitant obtenir de plus amples informations.",
                tags: ["santé", "Nestlé", "café Ricoré"]
            }
        ];
    });
