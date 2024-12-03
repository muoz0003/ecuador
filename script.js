document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery-container');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementById('close');

    const images = [
        { src: 'assets/img1.jpeg', hdSrc: 'assets/img1-hd.jpg', caption: 'Capac - Urco', description: 'Capac Urco, located in Ecuador’s Eastern Cordillera near the city of Riobamba, is a stratovolcano known for its towering presence and cultural significance. This volcano, part of the Sangay National Park, rises approximately 5,100 meters (16,732 feet) and is surrounded by rich Andean ecosystems. Although it’s not as active as nearby Sangay, Capac Urco holds historical and spiritual value, with its name translating to "Powerful Mountain" in the Indigenous Quechua language. The area offers stunning landscapes, including glacial lakes and diverse wildlife, attracting adventurous hikers and nature lovers.' },
        { src: 'assets/img2.jpeg', hdSrc: 'assets/img2-hd.jpg', caption: 'Altar Volcano', description: 'Capac Urco, located in Ecuador’s Eastern Cordillera near the city of Riobamba, is a stratovolcano known for its towering presence and cultural significance. This volcano, part of the Sangay National Park, rises approximately 5,100 meters (16,732 feet) and is surrounded by rich Andean ecosystems. Although it’s not as active as nearby Sangay, Capac Urco holds historical and spiritual value, with its name translating to "Powerful Mountain" in the Indigenous Quechua language. The area offers stunning landscapes, including glacial lakes and diverse wildlife, attracting adventurous hikers and nature lovers.' },
        { src: 'assets/img3.jpeg', hdSrc: 'assets/img3-hd.jpg', caption: 'Baños de Agua Santa', description: 'Baños de Agua Santa, often simply called Baños, is a vibrant town nestled in the Andean foothills of central Ecuador. Known as the "Gateway to the Amazon," it sits at the edge of lush rainforests and near the active Tungurahua Volcano. This small city is famous for its natural hot springs, believed to have healing properties, and is a haven for adventure seekers. Visitors flock to Baños for outdoor activities like white-water rafting, hiking, zip-lining, and its scenic “Swing at the End of the World.” Its lively streets, rich in local culture and filled with artisan shops and restaurants, make it a top destination for both relaxation and adventure.' },
        { src: 'assets/img4.jpeg', hdSrc: 'assets/img4-hd.jpg', caption: 'Cochahuma Zumbahua', description: 'Cochahuma is a stunning highland lake located near the Indigenous town of Zumbahua in the Cotopaxi province of Ecuador. Surrounded by rolling green hills and traditional Andean landscapes, this hidden gem is rich in natural beauty and tranquility. The lake’s name, derived from Quechua, means “Blue Lagoon,” and its peaceful waters reflect the vast Andean skies, creating a picturesque scene beloved by locals and travelers alike. Often visited by those exploring the nearby Quilotoa Loop, Cochahuma offers a serene escape and a glimpse into the traditional lifestyles and landscapes of Ecuador’s central highlands.' },
        { src: 'assets/img6.jpeg', hdSrc: 'assets/img6-hd.jpg', caption: 'Frailejon Cuicocha', description: 'The frailejón, a remarkable plant found in the high-altitude páramo ecosystems of the Cotacachi region, is known for its unique appearance and resilience. With thick, fuzzy leaves covered in white hairs, the frailejón can grow up to a few meters tall and thrives in cold, humid environments. This plant plays a vital role in capturing and storing moisture, helping regulate water availability for surrounding ecosystems. Revered for its ability to withstand extreme mountain climates, the frailejón is not only an emblem of Ecuadorean páramo landscapes but also a symbol of endurance in Andean culture.' },
        { src: 'assets/img7.jpeg', hdSrc: 'assets/img7-hd.jpg', caption: 'Cuicocha Lagoon', description: 'Cuicocha Lagoon, also known as Lake Cuicocha, is a stunning volcanic crater lake located at the foot of the Cotacachi Volcano in northern Ecuador. Situated within the Cotacachi-Cayapas Ecological Reserve, this deep blue lake formed over 3,000 years ago after a massive eruption. Its name, meaning “Lake of the Guinea Pig” in Kichwa, refers to the shape of one of its small islands, which resembles a guinea pig. Surrounded by lush highland scenery, Cuicocha is a popular spot for hiking, boating, and immersing in Indigenous culture, as it holds spiritual significance for local communities. The lake’s serene beauty, with its islands and clear waters, makes it one of Ecuador’s most captivating natural landmarks.' },
        { src: 'assets/img8.jpeg', hdSrc: 'assets/img8-hd.jpg', caption: 'Islas Galapagos', description: 'The Galápagos Islands are world-renowned for their extraordinary fauna, home to species found nowhere else on Earth. This unique archipelago hosts iconic animals like the giant Galápagos tortoises, marine iguanas, and blue-footed boobies, each adapted to the islands diverse environments. The Galápagos penguin, the only penguin species living north of the equator, and the playful Galápagos sea lion are just a few examples of its remarkable wildlife. Charles Darwin’s studies of the Galápagos finches here inspired his groundbreaking theory of evolution. Protected as part of the Galápagos National Park and Marine Reserve, the islands’ biodiversity offers a living window into evolutionary processes, drawing scientists and nature enthusiasts from around the globe.' },
        { src: 'assets/img9.jpeg', hdSrc: 'assets/img9-hd.jpg', caption: 'Puerto Isabella Galapagos', description: 'sabela Island, the largest of Ecuador’s Galápagos Islands, is renowned for its dramatic landscapes and rich biodiversity. Shaped by the merging of six shield volcanoes, Isabela boasts lava fields, lush highlands, and coastal lagoons, making it one of the most geologically active places on Earth. This island is a haven for wildlife, home to unique species like the Galápagos penguin, giant tortoises, flightless cormorants, and marine iguanas. Isabela’s beaches and mangroves offer nesting sites for sea turtles and a range of marine life, while its pristine waters attract snorkelers and divers eager to see manta rays, sharks, and colorful fish. With its secluded beauty and diverse ecosystems, Isabela Island embodies the natural wonders that make the Galápagos so extraordinary.' },
        { src: 'assets/img10.jpeg', hdSrc: 'assets/img10-hd.jpg', caption: 'Blue Footed Boobie', description: 'The blue-footed booby is one of the most beloved and iconic birds of the Galápagos Islands, instantly recognizable by its striking, bright blue feet. These seabirds, found primarily along the Pacific coast from the Galápagos to Central and South America, use their vivid blue feet in elaborate courtship dances, which involve high-stepping and sky-pointing to attract mates. Males with brighter feet are often more successful in finding a mate, as the color indicates good health and fertility. Known for their excellent diving skills, blue-footed boobies plunge from great heights to catch fish, using their streamlined bodies and keen vision. Playful and unique, they embody the vibrant and diverse wildlife of the Galápagos, captivating both scientists and visitors alike.' },
        { src: 'assets/img11.jpeg', hdSrc: 'assets/img11-hd.jpg', caption: 'Tortuga Bay', description: 'Tortuga Bay, located on Santa Cruz Island in the Galápagos, is a stunning beach renowned for its pristine white sands and turquoise waters. Named after the sea turtles (tortugas) that nest on its shores, this bay offers a tranquil setting for nature lovers and beachgoers alike. The area is home to a rich array of wildlife, including marine iguanas, colorful Sally Lightfoot crabs, and small reef sharks that can sometimes be seen near the shore. Divided into two sections, Tortuga Bay includes a calm lagoon ideal for swimming, snorkeling, and kayaking, while the main beach stretches out with strong waves that make it popular for surfing. As one of the most beautiful beaches in the Galápagos, Tortuga Bay showcases the island’s untouched beauty and biodiversity.' },
        { src: 'assets/img12.jpeg', hdSrc: 'assets/img12-hd.jpg', caption: 'Mindo Rainforest', description: 'The Mindo Rainforest, located in Ecuador’s Andean cloud forest region, is a lush and biodiverse paradise known for its incredible variety of flora and fauna. Nestled in a valley between the Andes and the coast, Mindos unique climate supports over 500 species of birds, including toucans, hummingbirds, and the famous Andean cock-of-the-rock, making it a top destination for birdwatchers. In addition to birds, the rainforest is home to an array of butterflies, orchids, reptiles, and amphibians. Adventurers visiting Mindo can enjoy activities like hiking to waterfalls, tubing down rivers, zip-lining through the canopy, and visiting butterfly and orchid farms. Known for its vibrant biodiversity and tranquil beauty, Mindo offers an immersive experience in Ecuadors natural wonders.' },
        { src: 'assets/img13.jpeg', hdSrc: 'assets/img13-hd.jpg', caption: 'Misahualli Rainforest', description: 'Misahuallí is a charming river town located in the Amazon rainforest of Ecuador, known as a gateway to the Amazon Basin. Situated at the confluence of the Napo and Misahuallí rivers, this small town is famous for its playful troop of Capuchin monkeys that roam freely around the main plaza. Misahuallí offers an authentic Amazonian experience with opportunities for river excursions, hikes through lush jungle trails, and visits to Indigenous communities where visitors can learn about local traditions and customs. The surrounding rainforest is home to rich wildlife, including parrots, toucans, and a variety of exotic plants. With its mix of nature and culture, Misahuallí serves as a peaceful retreat for travelers exploring the Ecuadorian Amazon.' },
        { src: 'assets/img16.jpeg', hdSrc: 'assets/img16-hd.jpg', caption: 'Quito Old Town', description: 'Quito’s Old Town, a UNESCO World Heritage site, is a beautifully preserved colonial area rich in history, culture, and architecture. Nestled in the Andes at 2,850 meters (9,350 feet) above sea level, it is one of the largest and best-preserved historic centers in Latin America. The Old Town is filled with cobblestone streets, colorful buildings, and centuries-old churches, including iconic landmarks like the gold-adorned La Compañía de Jesús Church and the grand Basilica del Voto Nacional. It also features plazas such as Plaza de la Independencia, surrounded by significant buildings like the Presidential Palace and the Metropolitan Cathedral. Wandering through Quito’s Old Town reveals a blend of Indigenous, Spanish, and Moorish influences, offering a captivating journey through Ecuador’s cultural heritage.' },
        { src: 'assets/img17.jpeg', hdSrc: 'assets/img17-hd.jpg', caption: 'Sinchi Sacha - Misahualli', description: 'Sinchi Sacha, located near Misahuallí in Ecuador’s Amazon rainforest, is a hidden gem known for its untouched beauty and lush biodiversity. Translating to “Strong Forest” in Kichwa, Sinchi Sacha is a private ecological reserve that offers visitors an immersive Amazonian experience. This pristine area showcases dense jungle, towering trees, exotic wildlife, and vibrant plant life, embodying the richness of Ecuador’s eastern lowlands. Guided hikes through the reserve reveal medicinal plants, rare bird species, and glimpses of monkeys and other forest animals. Sinchi Sacha is also committed to conservation and environmental education, allowing visitors to connect deeply with the Amazon’s natural wonders and Indigenous culture.' },
        { src: 'assets/img18.jpeg', hdSrc: 'assets/img18-hd.jpg', caption: 'Shiripuno Community', description: 'The vibrant Shiripuno Community, located in the heart of the Ecuadorian Amazon, is a testament to the resilience and rich cultural heritage of the Indigenous peoples of the region. Situated along the Shiripuno River, the community is known for its deep connection to the rainforest and its commitment to preserving traditional ways of life. The people of Shiripuno are part of the Huaorani (Waorani) Nation, a group that has long lived in harmony with the forest, relying on hunting, fishing, and gathering for sustenance. Visitors to the Shiripuno Community can learn about their sustainable practices, participate in traditional ceremonies, and explore the surrounding jungle, which is home to diverse wildlife and unique plant species. The community is also involved in conservation efforts, aiming to protect their land from external threats while preserving their ancestral knowledge and customs.' },
        { src: 'assets/img19.jpeg', hdSrc: 'assets/img19-hd.jpg', caption: 'Tungurahua Volcano', description: 'The majestic Tungurahua Volcano, located in central Ecuador, stands at an impressive 5,023 meters (16,480 feet) and is one of the country’s most active volcanoes. Its name, meaning "Throat of Fire" in Kichwa, reflects its frequent eruptions, which have shaped the surrounding landscapes and enriched the region’s fertile soil. Tungurahua is a dominant feature in the area, visible from nearby towns like Baños de Agua Santa, which offers stunning views of the volcano. The surrounding region is rich in natural beauty, with waterfalls, hot springs, and lush forests. Tungurahua also plays a significant role in local culture and spirituality, with many communities regarding it as a powerful, sacred force. Visitors often hike around its slopes to witness its volcanic activity up close while enjoying the breathtaking scenery.' }
    ];

    images.forEach((image, index) => {
        const galleryCell = document.createElement('div');
        galleryCell.classList.add('gallery-cell');

        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.dataset.hdSrc = image.hdSrc;
        imgElement.dataset.caption = image.caption;
        imgElement.dataset.description = image.description;
        imgElement.alt = `Image ${index + 1}`;
        imgElement.style.cursor = 'pointer';

        galleryCell.appendChild(imgElement);
        galleryContainer.appendChild(galleryCell);
    });

    galleryContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            modal.style.display = 'block';
            modalImg.src = event.target.dataset.hdSrc;
            modalImg.style.width = '90%';
            modalImg.style.maxWidth = '1000px';
            captionText.innerHTML = `<strong>${event.target.dataset.caption}</strong><br><br><span style="text-align: justify;">${event.target.dataset.description}</span>`;
        }
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Tentacle Animation Script
    window.requestAnimFrame = function () {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback);
            }
        );
    };

    function init(elemid) {
        let canvas = document.getElementById(elemid);
        c = canvas.getContext('2d');
        w = (canvas.width = window.innerWidth);
        h = (canvas.height = window.innerHeight);
        c.fillStyle = "rgba(0,0,0,1)";
        c.fillRect(0, 0, w, h);
        return { c: c, canvas: canvas };
    }

    window.onload = function () {
        let c = init("animated-background").c,
            canvas = init("animated-background").canvas,
            w = (canvas.width = window.innerWidth),
            h = (canvas.height = window.innerHeight),
            mouse = { x: false, y: false },
            last_mouse = {};

        function dist(p1x, p1y, p2x, p2y) {
            return Math.sqrt(Math.pow(p2x - p1x, 2) + Math.pow(p2y - p1y, 2));
        }

        class segment {
            constructor(parent, l, a, first) {
                this.first = first;
                if (first) {
                    this.pos = {
                        x: parent.x,
                        y: parent.y,
                    };
                } else {
                    this.pos = {
                        x: parent.nextPos.x,
                        y: parent.nextPos.y,
                    };
                }
                this.l = l;
                this.ang = a;
                this.nextPos = {
                    x: this.pos.x + this.l * Math.cos(this.ang),
                    y: this.pos.y + this.l * Math.sin(this.ang),
                };
            }
            update(t) {
                this.ang = Math.atan2(t.y - this.pos.y, t.x - this.pos.x);
                this.pos.x = t.x + this.l * Math.cos(this.ang - Math.PI);
                this.pos.y = t.y + this.l * Math.sin(this.ang - Math.PI);
                this.nextPos.x = this.pos.x + this.l * Math.cos(this.ang);
                this.nextPos.y = this.pos.y + this.l * Math.sin(this.ang);
            }
            fallback(t) {
                this.pos.x = t.x;
                this.pos.y = t.y;
                this.nextPos.x = this.pos.x + this.l * Math.cos(this.ang);
                this.nextPos.y = this.pos.y + this.l * Math.sin(this.ang);
            }
            show() {
                c.lineTo(this.nextPos.x, this.nextPos.y);
            }
        }

        class tentacle {
            constructor(x, y, l, n, a) {
                this.x = x;
                this.y = y;
                this.l = l;
                this.n = n;
                this.t = {};
                this.rand = Math.random();
                this.segments = [new segment(this, this.l / this.n, 0, true)];
                for (let i = 1; i < this.n; i++) {
                    this.segments.push(
                        new segment(this.segments[i - 1], this.l / this.n, 0, false)
                    );
                }
            }
            move(last_target, target) {
                this.angle = Math.atan2(target.y - this.y, target.x - this.x);
                this.dt = dist(last_target.x, last_target.y, target.x, target.y);
                this.t = {
                    x: target.x - 0.8 * this.dt * Math.cos(this.angle),
                    y: target.y - 0.8 * this.dt * Math.sin(this.angle)
                };
                if (this.t.x) {
                    this.segments[this.n - 1].update(this.t);
                } else {
                    this.segments[this.n - 1].update(target);
                }
                for (let i = this.n - 2; i >= 0; i--) {
                    this.segments[i].update(this.segments[i + 1].pos);
                }
                if (
                    dist(this.x, this.y, target.x, target.y) <=
                    this.l + dist(last_target.x, last_target.y, target.x, target.y)
                ) {
                    this.segments[0].fallback({ x: this.x, y: this.y });
                    for (let i = 1; i < this.n; i++) {
                        this.segments[i].fallback(this.segments[i - 1].nextPos);
                    }
                }
            }
            show(target) {
                if (dist(this.x, this.y, target.x, target.y) <= this.l) {
                    c.globalCompositeOperation = "lighter";
                    c.beginPath();
                    c.moveTo(this.x, this.y);
                    for (let i = 0; i < this.n; i++) {
                        this.segments[i].show();
                    }
                    c.strokeStyle = "hsl(" + (this.rand * 60 + 180) +
                        ",100%," + (this.rand * 60 + 25) + "%)";
                    c.lineWidth = this.rand * 2;
                    c.lineCap = "round";
                    c.lineJoin = "round";
                    c.stroke();
                    c.globalCompositeOperation = "source-over";
                }
            }
            show2(target) {
                c.beginPath();
                if (dist(this.x, this.y, target.x, target.y) <= this.l) {
                    c.arc(this.x, this.y, 2 * this.rand + 1, 0, 2 * Math.PI);
                    c.fillStyle = "white";
                } else {
                    c.arc(this.x, this.y, this.rand * 2, 0, 2 * Math.PI);
                    c.fillStyle = "darkcyan";
                }
                c.fill();
            }
        }

        let maxl = 400,
            minl = 50,
            n = 30,
            numt = 600,
            tent = [],
            clicked = false,
            target = { x: 0, y: 0 },
            last_target = {},
            t = 0,
            q = 10;

        for (let i = 0; i < numt; i++) {
            tent.push(
                new tentacle(
                    Math.random() * w,
                    Math.random() * h,
                    Math.random() * (maxl - minl) + minl,
                    n,
                    Math.random() * 2 * Math.PI
                )
            );
        }

        function draw() {
            if (mouse.x) {
                target.errx = mouse.x - target.x;
                target.erry = mouse.y - target.y;
            } else {
                target.errx =
                    w / 2 +
                    ((h / 2 - q) * Math.sqrt(2) * Math.cos(t)) /
                    (Math.pow(Math.sin(t), 2) + 1) - 
                    target.x;
                target.erry =
                    h / 2 +
                    ((h / 2 - q) * Math.sqrt(2) * Math.cos(t) * Math.sin(t)) /
                    (Math.pow(Math.sin(t), 2) + 1) - 
                    target.y;
            }
        
            // Slow down the target point movement
            target.x += target.errx / 20; // Increase the divisor to slow down
            target.y += target.erry / 20; // Increase the divisor to slow down
        
            // Slow down the time increment
            t += 0.005; // Decrease the increment to slow down

            c.globalAlpha = 0.2; // Set transparency level
            c.beginPath();
            c.arc(
                target.x,
                target.y,
                dist(last_target.x, last_target.y, target.x, target.y) + 5,
                0,
                2 * Math.PI
            );
            c.fillStyle = "hsl(210,100%,80%)";
            c.fill();

            for (i = 0; i < numt; i++) {
                tent[i].move(last_target, target);
                tent[i].show2(target);
            }
            for (i = 0; i < numt; i++) {
                tent[i].show(target);
            }
            last_target.x = target.x;
            last_target.y = target.y;
            c.globalAlpha = 1.0; // Reset transparency level
        }

        function loop() {
            window.requestAnimFrame(loop);
            c.clearRect(0, 0, w, h);
            draw();
        }

        window.addEventListener("resize", function () {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            loop();
        });

        loop();
        setInterval(loop, 1000 / 60);

        canvas.addEventListener("mousemove", function (e) {
            last_mouse.x = mouse.x;
            last_mouse.y = mouse.y;
            mouse.x = e.pageX - this.offsetLeft;
            mouse.y = e.pageY - this.offsetTop;
        }, false);

        canvas.addEventListener("mouseleave", function (e) {
            mouse.x = false;
            mouse.y = false;
        });
    };

    // Interactive Navigation Menu
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            navLinks.forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');
        });
    });

    window.addEventListener('scroll', () => {
        let current = '';

        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = link.getAttribute('href');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    });
});