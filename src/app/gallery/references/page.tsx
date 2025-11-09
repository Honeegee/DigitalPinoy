'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function ReferencesPage() {
  const references = [
    {
      category: 'CULTURE EXCHANGE AND HYBRIDITY',
      items: [
        {
          author: 'Maddela, O.',
          year: '2019',
          title: 'These fashion experts want you to handle the revival of Y2K style wisely',
          source: 'Preview',
          url: 'https://www.preview.ph/fashion/2000s-fashion-revival-jlo-a00190-20191003-lfrm'
        },
        {
          author: 'Philippine Primer',
          year: '2020',
          title: 'Cable operators & TV networks',
          source: 'Philippine Primer',
          url: 'https://primer.com.ph/blog/2020/09/15/cable-operators-tv-networks/'
        },
        {
          author: 'Anarcon, J. P.',
          year: '2019',
          title: 'ABS-CBN teleserye list of TV series adaptations',
          source: 'PEP.ph',
          url: 'https://www.pep.ph/guide/tv/142940/abs-cbn-teleserye-list-of-tv-series-adaptations-a724-20190430-lfrm2'
        },
        {
          author: 'Wikipedia',
          year: 'n.d.',
          title: 'Becoming (Sarah Geronimo album)',
          source: 'Wikipedia',
          url: 'https://en.wikipedia.org/wiki/Becoming_(Sarah_Geronimo_album)'
        },
        {
          author: 'Logos Fandom',
          year: 'n.d.',
          title: 'Pangako Sa \'Yo',
          source: 'Logos Fandom',
          url: 'https://logos.fandom.com/wiki/Pangako_Sa_%27Yo'
        }
      ]
    },
    {
      category: 'FOOD AND CONSUMER CULTURE',
      items: [
        {
          author: 'Anonymous',
          year: '2025',
          title: 'Early 2000s price menu of Jollibee',
          source: 'Reddit',
          url: 'https://www.reddit.com/r/Philippines/comments/1mppyh8/early_2000s_price_menu_of_jolibee/'
        },
        {
          author: 'Traveller 180',
          year: 'n.d.',
          title: 'Jollibee – Manila, Metro Manila, Luzon',
          source: 'TripAdvisor',
          url: 'https://www.tripadvisor.com.ph/Restaurant_Review-g298573-d4602802-Reviews-Jollibee-Manila_Metro_Manila_Luzon.html'
        },
        {
          author: 'The Urban Roamer',
          year: '2019',
          title: 'The good ol\' Greenhills Shopping Center — Part 1',
          source: 'The Urban Roamer',
          url: 'https://www.theurbanroamer.com/greenhills-shopping-center-part-1/'
        },
        {
          author: 'Anonymous',
          year: '2025',
          title: '\'90s McDonald\'s?',
          source: 'Reddit',
          url: 'https://www.reddit.com/r/Philippines/comments/1bn326v/90s_mcdonalds/'
        },
        {
          author: 'Author unknown',
          year: '2010',
          title: 'SM Mall of Asia: The 3rd largest shopping mall in the world',
          source: 'Philippines Tour Guide',
          url: 'https://www.phtourguide.com/sm-mall-of-asia-the-3rd-largest-shopping-mall-in-the-world/'
        }
      ]
    },
    {
      category: 'TELEVISION AND FILM',
      items: [
        {
          author: 'Thomperfan',
          year: 'n.d.',
          title: 'My top 10 favorite Cartoon Network shows',
          source: 'The Loud House Fandom',
          url: 'https://theloudhouse.fandom.com/wiki/User_blog:Thomperfan/My_top_10_favorite_Cartoon_Network_shows'
        },
        {
          author: 'Wikipedia',
          year: 'n.d.',
          title: 'Disney Channel (Southeast Asia)',
          source: 'Wikipedia',
          url: 'https://en.wikipedia.org/wiki/Disney_Channel_(Southeast_Asia)'
        },
        {
          author: 'IMDb',
          year: 'n.d.',
          title: 'Harry Potter and the Sorcerer\'s Stone',
          source: 'IMDb',
          url: 'https://www.imdb.com/title/tt0241527/'
        },
        {
          author: 'Wikipedia',
          year: 'n.d.',
          title: 'Nickelodeon',
          source: 'Wikipedia',
          url: 'https://en.wikipedia.org/wiki/Nickelodeon'
        },
        {
          author: 'Anonymous',
          year: '2023',
          title: 'This is the Disney Channel era I will always...',
          source: 'Reddit',
          url: 'https://www.reddit.com/r/DisneyChannel/comments/1g4hfsf/this_is_the_disney_channel_era_i_will_always/'
        },
        {
          author: 'Wikipedia',
          year: 'n.d.',
          title: 'Philippine Idol',
          source: 'Wikipedia',
          url: 'https://en.wikipedia.org/wiki/Philippine_Idol'
        },
        {
          author: 'IMDb',
          year: 'n.d.',
          title: 'The Powerpuff Girls',
          source: 'IMDb',
          url: 'https://www.imdb.com/title/tt0175058/'
        },
        {
          author: 'Pinoy Big Brother Fandom',
          year: 'n.d.',
          title: 'Pinoy Big Brother (TV Series)',
          source: 'Pinoy Big Brother Fandom',
          url: 'https://pinoybigbrother.fandom.com/wiki/Pinoy_Big_Brother_(TV_Series)'
        },
        {
          author: 'Wikipedia',
          year: 'n.d.',
          title: 'Spider-Man (2002 film)',
          source: 'Wikipedia',
          url: 'https://en.wikipedia.org/wiki/Spider-Man_(2002_film)'
        },
        {
          author: 'IMDb',
          year: 'n.d.',
          title: 'Twilight',
          source: 'IMDb',
          url: 'https://www.imdb.com/title/tt1099212/'
        }
      ]
    },
    {
      category: 'FASHION AND LIFESTYLE',
      items: [
        {
          author: 'Converse Philippines',
          year: 'n.d.',
          title: 'Chuck Taylor All Star Hi (Unisex Black)',
          source: 'Converse Philippines',
          url: 'https://www.converse.ph/chuck-taylor-all-star-hi-unisex-black.html?color=294'
        },
        {
          author: 'Instagram',
          year: '2023',
          title: 'The Nike P-6000 \'Racer Blue\' sneaker draws on the 2006 Nike Air Pegasus...',
          source: 'Instagram',
          url: 'https://www.instagram.com/p/C2DZXwKv7im/'
        },
        {
          author: 'Wikipedia',
          year: 'n.d.',
          title: 'H&M',
          source: 'Wikipedia',
          url: 'https://en.wikipedia.org/wiki/H%26M'
        },
        {
          author: 'Levi\'s',
          year: '2025',
          title: 'Levi\'s logo and symbol, meaning, history',
          source: '1000 Logos',
          url: 'https://1000logos.net/levis-logo/'
        },
        {
          author: 'ShopBack Philippines',
          year: 'n.d.',
          title: 'Mango',
          source: 'ShopBack Philippines',
          url: 'https://www.shopback.ph/mango'
        },
        {
          author: 'Wikipedia',
          year: 'n.d.',
          title: 'Seventeen (American magazine)',
          source: 'Wikipedia',
          url: 'https://en.wikipedia.org/wiki/Seventeen_(American_magazine)'
        },
        {
          author: 'BusinessWorld Online',
          year: '2024',
          title: 'Zara owner Inditex slashes China stores in digital focus',
          source: 'BusinessWorld Online',
          url: 'https://www.bworldonline.com/arts-and-leisure/2024/03/18/582237/zara-owner-inditex-slashes-china-stores-in-digital-focus/'
        },
        {
          author: 'FamousFix',
          year: '2015',
          title: 'Candy Magazine [Philippines] (May 2015)',
          source: 'FamousFix',
          url: 'https://www.famousfix.com/topic/candy-magazine-philippines-may-2015'
        }
      ]
    },
    {
      category: 'MUSIC AND ENTERTAINMENT',
      items: [
        {
          author: 'A Fangirl\'s Heart',
          year: '2016',
          title: 'MTV Music Evolution Manila 2016',
          source: 'A Fangirl\'s Heart',
          url: 'https://www.afangirlsheart.com/2016/06/mtv-music-evolution-manila-2016.html'
        },
        {
          author: 'Wikipedia',
          year: '1997',
          title: 'Backstreet\'s Back',
          source: 'Wikipedia',
          url: 'https://en.wikipedia.org/wiki/Backstreet%27s_Back'
        },
        {
          author: 'Discogs',
          year: '2023',
          title: 'The Best Of MTV02 [Album]',
          source: 'Discogs',
          url: 'https://www.discogs.com/release/21258949-Various-The-Best-Of-MTV02'
        },
        {
          author: 'itsakworld',
          year: '2011',
          title: 'Korean TV drama society in the Philippines',
          source: 'WordPress',
          url: 'https://itsakworld.wordpress.com/2011/03/11/korean-tv-drama-society-in-the-philippines/'
        },
        {
          author: 'AsianWiki',
          year: 'n.d.',
          title: 'Descendants of the Sun',
          source: 'AsianWiki',
          url: 'https://asianwiki.com/Descendants_of_the_Sun'
        },
        {
          author: 'Korea Cultural Centre UK',
          year: 'n.d.',
          title: 'Hallyu (Korean Wave)',
          source: 'Korea Cultural Centre UK',
          url: 'https://kccuk.org.uk/en/about-korea/culture-and-arts/hallyu-korean-wave/'
        }
      ]
    }
  ];

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url(/DigitalPinoy/images/gallery.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Link href="/gallery" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Gallery</span>
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                References
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 max-w-4xl leading-relaxed"
            >
              Academic and cultural references supporting the Digital Pinoy Gallery collection. 
              All sources are properly cited following academic standards.
            </motion.p>
          </motion.div>

          {/* References by Category */}
          <div className="space-y-12">
            {references.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + categoryIndex * 0.1 }}
                className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
              >
                <h2 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-purple-500/30">
                  {category.category}
                </h2>

                <div className="space-y-6">
                  {category.items.map((reference, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + categoryIndex * 0.1 + index * 0.05 }}
                      className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 bg-black/30 rounded-lg hover:bg-purple-500/10 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-cyan-400 font-medium">{reference.author}</span>
                          <span className="text-gray-400">({reference.year})</span>
                        </div>
                        <h3 className="text-white font-semibold mb-1">{reference.title}</h3>
                        <p className="text-gray-400 text-sm">{reference.source}</p>
                      </div>
                      <a
                        href={reference.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors px-4 py-2 bg-purple-500/20 rounded-lg hover:bg-purple-500/30"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Visit</span>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center text-gray-400 text-sm"
          >
            <p>All references are provided for educational and research purposes.</p>
            <p className="mt-2">Digital Pinoy Museum © 2025</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}