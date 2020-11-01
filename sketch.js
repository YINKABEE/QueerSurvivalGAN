let rainbow;

const a = [-0.012461281459728552, 0.010730219759263457, 0.004569205723139154, 0.075824817055576, 0.03075377387193758, -0.01995648270618531, -0.03293878965492367, -0.028296889298072992, 0.022361698970389428, -0.0799266749377675, -0.029552701346843367, 0.056891271591881364, -0.059497917645848906, -0.076247827404994, 0.04588211577143872, 0.07013595673733315, 0.03084509503537354, 0.10793399836392759, 0.11869619065078024, 0.05942563074299667, 0.03954407199489992, 0.0680111253158454, -0.043363849751544795, 0.036570176373642065, 0.05789171613525591, -0.014382842751950741, 0.020344289634119002, 0.01489995792468288, 0.05988577227929134, 0.027952528980011035, 0.01547374926660007, 0.053948416465433455, -0.16740712743369812, 0.04064939770339971, 0.056630234176186546, 0.04417016493272635, -0.014347990472928666, -0.10022340487922539, -0.11201292415306344, 0.05662462332491339, 0.004755668128365753, -0.20374949196350567, -0.049975051473875105, 0.017665648839974096, -0.01799819019397823, 0.0660095811602113, -0.0643827559484867, 0.005350380648343957, 0.002572893340170683, 0.1382826600184274, 0.11276674475686503, -0.1409690897068368, -0.1093792968321636, -0.06310543994311021, 0.015530713618810265, 0.07031614784317732, 0.08967493415258691, 0.06906099720383393, 0.029982380199070086, 0.06425258281208085, 0.04583898590543355, 0.01911494621994346, 0.11599252215479408, 0.008668774146719089, -0.0013359451387607926, -0.03531821282193845, -0.0601372364991548, -0.015696518509206617, 0.024682162483350104, 0.11138322667310949, -0.03567854516363892, 0.04174218930629957, 0.0880117573760612, 0.11650427241917781, 0.07591193493461552, -0.03811570893375521, -0.09465043098022727, 0.08057195064891609, -0.022407774162717668, -0.1260464116630263, 0.037396108822138535, 0.013790864160082685, 0.08880610353410598, 0.04859779373532417, -0.028777758114203723, -0.11448243428237986, -0.020861178075176894, 0.04314478579433066, 0.039092471045369274, -0.06535368627947909, 0.009699751337070692, 0.09814309744492325, -0.018666438204574948, 0.021395760947600748, 0.05043310821913838, -0.0352415717473107, -0.027958702904648636, -0.06980492481752362, 0.0451729568147684, -0.040148647540489586, 0.02394422701272893, 0.07415319142792587, 0.04098809537820245, 0.01804970472990567, 0.01889566256363724, 0.09651121616445049, -0.13491198560951925, -0.055648651954201794, -0.0813758262246008, 0.01628092879459523, -0.032983268417574124, -0.06366714116186897, -0.12784829326777503, 0.032142575992766126, 0.16613438522231988, -0.0001478531913370381, 0.11867472237914228, -0.017728125775285257, 0.023669643443484822, -0.06161913093274632, -0.08623270979902004, -0.05301705341327515, 0.04218557596846733, 0.09673579002199467, 0.08635628932064163, 0.05434695295111201, 0.049833294526958394, -0.09297236263629355, 0.013639064233021608, -0.07816281850435829, 0.061400531846994004, 0.02773322418141784, -0.007249600519606669, -0.039800196920653605, -0.029491786302505613, 0.002009858859078041, -0.06164846105441861, -0.019036391580939747, -0.11336934306162474, -0.016914774851179898, 0.06599189459303921, -0.07037549104256076, 0.026973607189346084, -0.056729541057375175, -0.03266969844090989, -0.04645262036572922, 0.01801097735266168, 0.006939095329693834, -0.11839569735349632, -0.0812245607228847, -0.16774590262634245, 0.09107409498203192, -0.09482681017382444, -0.11881754577058173, -0.007899761263698296, 0.00029723508329413534, 0.030223376361837417, 0.045556435521826845, -0.08968910910246938, -0.0563856494402567, -0.07207555972220901, 0.0656049049914441, -0.01316266696203646, -0.019396424495496264, 0.007417203864143029, 0.06269121632319116, 0.03149225786972214, -0.150782906950239, -0.010073325942208992, 0.032778326935423416, 0.017670376729836738, -0.019817351424472857, -0.03022867615810777, -0.20128953816630538, 0.013907137025092477, 0.012925527605257468, -0.020440220942173848, 0.013158094442681487, 0.043523269458197095, 0.0046649593368768075, -0.08484505235122732, 0.026888236403295337, 0.06686468238916415, -0.10630362298882506, 0.013640796928367283, 0.028603579521161743, 0.01413986942888694, -0.04658967216336907, 0.08625140163505726, -0.03544179285864114, -0.10691660343341965, 0.01077483234632029, 0.015492481800136973, -0.008890129844321805, 0.05913010546846393, 0.15839624466801158, 0.031724443967110334, 0.004134064060967085, 0.0356474991673848, 0.10388513823987099, -0.108223056818339, -0.04449060068786857, -0.015349576862070944, -0.08146765000707429, -0.11033314666206295, -0.04471911765463375, -0.05989450162722593, 0.018754525664405858, 0.07075174243135449, 0.01709613791198715, -0.08007469427313606, -0.004944785389434728, -0.21043775742134452, -0.1729621570973819, -0.10250103759520499, 0.055720799783826824, -0.1219985368274353, 0.08841378643290544, 0.06196147581677068, -0.033650649215275066, -0.023794770205562147, 0.07251534292208624, -0.046222701012178194, -0.09764011233579936, -0.027489983715316874, 0.016930633247639465, 0.09634657199310544, 0.027830666128873034, -0.05972777166485372, -0.13037937508896996, -0.07378785106740188, 0.024183051336521426, -0.056059836391644906, -0.06513418659619066, -0.029016320856402034, 0.023774170933116914, -0.0016193293110981083, -0.09930747584098208, 0.06902528541318963, -0.052067835841082544, -0.1195265871930548, 0.029016424390211168, -0.0363695379379952, -0.09006610437825091, 0.012823978275705888, -0.17747899802140693, -0.11373526823041599, -0.21147167416019266, 0.03362946245338942, 0.008642161743311965, 0.08732341601764855, -0.06545334122402852, -0.06826416323788878, 0.08548490537223005, -0.04049495526750162, 0.026975794881765994, 0.06981800443656437, -0.0254840723743033, -0.011535441526152226, 0.001575732892780339, 0.027457446652591658, -0.030277742673346552, -0.10572348677605595, -0.05753251607973742, -0.024329914571448834, 0.11055966266169247, -0.01939174804234062, 0.07732008759976347, -0.023256265017481084, -0.012067405814723986, 0.11428738078362365, 0.04753606704626627, -0.10894630287737239, 0.034818438662803076, 0.04496130661846963, 0.058646034222370004, 0.004404464122388509, -0.08997038398271684, 0.06432315477639036, -0.010044130965290526, -0.01092261873332391, 0.01648404816901101, -0.14043533160242494, -0.02879531009262601, -0.02066940776631063, 0.04063458904084631, -0.0992406301208059, -0.04006062189833521, -0.012365218372421983, -0.009744889689535791, 0.04395341502270669, 0.08091137090244643, -0.03064064425247823, -0.04353297835426146, 0.037031294713335224, -0.11294827666990903, 0.0979864247483518, 0.05610845347794567, 0.044495656934300146, 0.013477404955203082, -0.09927433916605877, 0.037018188802782195, -0.035831144681767374, 0.03906219625969501, -0.014635677017000746, 0.0409907473277582, 0.04006689264080751, -0.018106421152104493, 0.07739216663971703, -0.03215596528932, -0.01210496416126262, -0.045667731646696845, -0.06844507144530382, 0.05121604747624105, 0.036121436208334544, 0.06132976041416471, 0.04360772298388308, -0.07819991176386472, 0.06475852040798134, -0.013745962151702155, 0.029974415370523172, 0.11334182397349203, -0.022110865172802495, -0.0997500150954474, -0.12963740039117877, 0.023851039228665077, 0.08225325207395012, 0.20160048948258877, -0.01057479322503721, 0.021154413652284074, -0.046692024056373224, -0.052155631804240786, 0.03910153130013003, 0.01721568320670675, 0.009513559351831838, -0.01259857741323676, 0.20133791409382162, -0.06506611872665685, -0.07086255069176614, -0.05042360900372687, -0.024983723664025584, -0.10422037694249385, -0.05019642806591798, 0.04898884830468125, 0.04973328387090008, -0.11729029777989547, 0.016889176559709895, -0.00894496885516101, 0.05852554286461813, -0.11616052595251555, -0.022716912293405493, 0.008636232155316101, 0.060937255635232376, 0.03433145084221501, -0.037216727839991456, 0.12305142104576353, -0.031985940584572006, -0.1274332036218082, 0.002795735332300365, -0.10023856809669567, -0.02018026105557982, -0.10349466446136922, -0.03247163887265462, -0.06307548207729094, 0.0018163285059332387, 0.10006965924614047, 0.0070502877035802285, -0.033150043872452586, -0.06374842880988472, -0.05361230239272076, -0.05984760220240869, -0.05075875681223091, 0.03998564698689579, -0.16706401443870705, 0.027616433648589074, 0.08031453282929935, 0.0317918486060796, -0.04316017555161516, -0.008144904827963765, 0.04274460399961348, -0.017755825350493158, 0.009360765271392617, 0.02106510130052787, -0.03617958734950168, -0.015325801680974624, -0.05798509530332363, 0.08792948671535783, 0.14940155346471556, 0.11521966141245465, 0.03137661711744261, 0.03503669990806544, 0.042333343424388194, 0.009177345325599103, -0.13234212186579347, 0.04095154000294525, -0.009018722410043735, 0.10138070735592734, 0.06711155653788158, -0.0678637444181099, 0.052176587705732747, -0.11848917717049978, -0.04645216362818421, -0.013423801207901641, -0.003091350162136363, 0.0007943493054948028, -0.01772778596261944, -0.12802330162428963, 0.04216309674111826, 0.029407838500009446, 0.03613147618671581, -0.11667050004480996, 0.010440782831178512, -0.0479321630696338, -0.09236942364258963, 0.053101215761235165, -0.025810220441772547, 0.07723917397369123, 0.1170490336162015, 0.04742958038945781, -0.10926564141254771, 0.021684718683649393, -0.030807649068603383, 0.01612558452804019, 0.09022407156784391, 0.089571093207908, -0.049207899274241795, 0.08897160448420144, -0.07424745771361035, 0.0006549531968826246, -0.142317649133903, -0.14497452628524424, -0.05296212645194101, 0.10773730631245945, -0.10678331476876196, -0.06999500881531168, -0.08272628330809129, -0.12143372874087997, 0.051351438685165646, -0.008250116644508063, -0.040183122997271406, -0.0047984208987684705, 0.09420607400952916, -0.04467106820286938, 0.055348765089179984, -0.1111949020534681, -0.013972967633332957, -0.12313782048958699, -0.0726162999823598, 0.031142280953738086, 0.11216206098241796, -0.07976041682967855, 0.05303587445723611, 0.028056952772333905, 0.03302863519825176, -0.2126713799154601, -0.08739936172360116, -0.04708410599442006, 0.020712948115708892, -0.16175713318189297, 0.007007477802807966, -0.002687788281904205, 0.12909835244064705, -0.08076231361738201, 0.03931090082187194, -0.017180883752661406, 0.1575555771015228, 0.027659194676754636, 0.046286291515052806, -0.05454029063178775, 0.12312662615631674, 0.01373675383825822, -0.1295062044769283, 0.020422237092271714, 0.16301489558568594, -0.0014406281462930074, -0.06991015356409144, -0.0014533096682143344, 0.16523856511669, 0.09305730640708636, -0.04802168103664997, -0.04101076341177883, 0.0729643195178949, -0.006615136080820372, 0.07733486233178963, 0.05488905039260062, 0.06739010916352967, -0.029833864464430863, 0.05045743321180324, -0.038584692131965956, -0.03603685230117535, 0.14231990402070027, -0.06937437276421113, 0.08793587993033317, -0.07365999766863555, 0.07401942657624443, 0.0818130745948571, 0.007379914383229418, 0.004768704625192459, -0.0596940621692702, -0.08035470785280324, -0.07717273448844929, -0.03657881407342885, -0.0010050747911430503, -0.03462082171990127, -0.17644558721268752, -0.14417679708585468, -0.008121525801954497, -0.019141981459202595, 0.12228582000046778, -0.1952303650642045, 0.10225342686536634, 0.07091551010014512];
const n = [];
//const b = [-0.005472414176445083, 0.30621990567594276, -0.02062242691055311, 0.05265954411818593, 0.03347544829899553, -0.05132921943195638, -0.008803800334151027, -0.035127480952892455, -0.03285862323943144, -0.08042647122274602, -0.0698914059778593, 0.2785280488957236, 0.11529185876568644, -0.018458650775145566, 0.036682512625652086, 0.13828935564935219, -0.06961502790901401, 0.23074704562322876, 0.15262821088858589, -0.03673447389981903, 0.10670931240943003, 0.16441370949135617, -0.04599555047041182, 0.07707739834341937, -0.04350353410099079, 0.023534480534573115, -0.24126734282506868, -0.0522153815548816, 0.10139867073526668, 0.02985389692346381, -0.0657334341991343, 0.2660334290457276, -0.3010191718223793, 0.17612429934457974, 0.17997788794376224, -0.1272731348507955, -0.19281240979095657, -0.07295830493930752, -0.25295847680679157, 0.009824527213469908, -0.04428709428208688, -0.22560303334604642, 0.0691854408332484, -0.09929877214873017, 0.19160427829406074, 0.054290525712598715, -0.06535921202503621, -0.10397860677380148, -0.056399269311512505, -0.06933285142790951, -0.011724639066993378, -0.32640514411283267, -0.2799943284677463, -0.29999546394500093, -0.0318759143936819, 0.25317044529511257, 0.13331166903778843, 0.06542555435445954, 0.02493344732701075, 0.18042027773043356, 0.14984478940709361, -0.04036493741682924, -0.06152662908207707, 0.11037375595276958, 0.1508544981593833, -0.12290824510705896, -0.021170329869559974, -0.1684575605973474, -0.18123024612038244, 0.04087011671914312, 0.07527716831066317, 0.03386815987865466, 0.09352897911773364, 0.1565597486003555, 0.1186248610071752, -0.15519110802345135, -0.3064996333636789, 0.06214875360351131, 0.05142884601744625, -0.1941784517303508, 0.18642070308964911, -0.02374228797691314, 0.3060217178827256, 0.06382359384189146, -0.08016580264424229, -0.1766493658815504, -0.09132257847566258, 0.13977001570040787, -0.03200799244200706, -0.07623102104667169, -0.012317298265372199, 0.14130052764860693, 0.028754063285359743, -0.07039947938790424, -0.05758420912033066, 0.12989361415138365, -0.11597166044187365, 0.007636635435591302, 0.05637495636985494, -0.03884638513544379, 0.06903325384987327, 0.03234182294331671, 0.09926049441009732, -0.047904621414608856, -0.0412145104141644, 0.11882502666054844, -0.09086835070017699, 0.007007212450816244, 0.041623139455514185, 0.143071464946482, 0.09145335866831902, -0.14974332566325357, -0.12194540131788288, -0.14741488406632208, 0.3148553521775611, 0.0188075565203546, 0.1802118447522506, 0.03297039804488494, 0.11683774727763496, -0.012151013185914147, -0.03658673312013805, -0.2109297177131409, 0.010948955596988608, 0.08468441602884876, 0.1779410851601232, -0.013794121710843335, -0.0302607595569708, -0.010053296685379458, -0.039907261700431546, 0.01950119930478502, 0.027618446232787204, 0.08796156046194684, -0.110045868089199, -0.11226533879437181, 0.11522813173176294, -0.07134145535262079, -0.015237742759162384, 0.0979243840416819, -0.2526441385064333, 0.03354869799164221, 0.0062953570192586655, -0.12235806129876538, 0.05059863248139534, -0.10134882361232475, -0.20653795966429053, 0.0035433415638998905, 0.03619600634296949, -0.06063705623572778, -0.07930660162400437, -0.2645913727649831, -0.1707024511327138, 0.09075942918440646, -0.15757454783376368, -0.15023882133403135, 0.20019820661623136, -0.042292752792839054, 0.1781835600671426, 0.3625326741858256, 0.06713139094848317, 0.12953666901214544, -0.11538395974582111, 0.18782111854121616, -0.024183724952521832, 0.06726022406786196, 0.10910176277021419, -0.10715232501565557, 0.15985094873278197, -0.25265770486063205, -0.1680213556830206, -0.03309679009788482, 0.04888613584731596, -0.09874173149082455, -0.033712101879258494, -0.2299470895506167, -0.044554537143566164, -0.003680592936781444, -0.028175566862801343, -0.2084916854972083, 0.06076777084035312, 0.15440119812539968, -0.03886567310514077, 0.16945490370084487, 0.14715787407960346, -0.14365594394171616, 0.00945072031123104, 0.07711157778165909, -0.0352728958412766, -0.02243995309112293, 0.17522271929456795, 0.007869974212707624, -0.11897306555741863, -0.10181609306376888, -0.031077469515500014, -0.05943856706739448, 0.11579972277483674, 0.14178450110100593, 0.21917937145465277, 0.01172413957736132, 0.19044275998689425, 0.2188530772314844, 0.08672471625479011, 0.04176470237249159, -0.14272665336552093, -0.16817046145115777, -0.1814359551393116, -0.14099900234242382, -0.11682045410217673, 0.0664725175782633, 0.05970406391630905, 0.04135351432101091, -0.03322219977418414, -0.11467232094086834, -0.4468023596862719, -0.12821363312837225, -0.1752554427014406, 0.019692213999350217, -0.3163791126205847, 0.038416199571089875, 0.27276323465994395, 0.2041874325394598, 0.05057213654689552, 0.11321478873630011, -0.10024504774708143, 0.028497512608273018, -0.03772052019862031, 0.11267637181491755, 0.09288732993074651, -0.15713053936323101, -0.11030672853824992, -0.13583434936349423, 0.1418595888692752, 0.020870003841748273, -0.06622816057831188, -0.1444423725907233, -0.09371496528653013, 0.1698144623124046, -0.18323292990732806, -0.0889787185749008, 0.23125393842707076, 0.10108467596548139, -0.15088819005523743, -0.018602718299319407, -0.07862894127634187, -0.12462697285454506, 0.0020430192122981375, -0.16422731600245397, -0.22861202094309677, -0.28350033576795824, 0.11269436975264195, 0.008237108746414132, -0.007123337969852442, 0.013627360650660114, -0.08630674013997182, 0.19409841220086846, -0.08270348729373873, 0.1343217766883266, 0.11801035391700021, 0.15709661086173318, 0.0011782974307302657, 0.06243608038251352, 0.15391073333043773, -0.21860795876656453, 0.004230791578681295, -0.12593030327575103, 0.14132728803432723, 0.1755406809454217, -0.008303769433967004, 0.1807304473331525, -0.12202467498470426, 0.030986865226275643, 0.2686308777305481, 0.17280690901339668, -0.13770003047094173, 0.12529887370321413, 0.14998259870373143, -0.013157534753924253, -0.13707659476165, -0.1228187459235215, 0.30050838048770595, -0.10776154042142233, 0.10374552480285142, -0.09444113034608616, -0.31730842893846223, 0.011789397323447484, -0.08649262884264707, 0.07773174723626106, -0.14425815852719184, -0.11314957897225239, -0.12494513060657772, 0.12676519910983416, 0.27206308227691456, 0.026366885693793224, -0.1385127603007027, -0.07981082465807639, 0.027781778510128762, -0.18520479315779917, 0.42760135595842963, 0.13490488831849834, 0.1183991703497222, -0.10161368943607355, -0.11157007036496708, 0.056413954500555634, -0.14626710133375698, 0.07084912050943089, -0.06406287551817554, 0.13219892402212058, -0.08569754586252669, -0.13519717675191945, 0.1723405540240216, -0.05727914685158921, 0.0026634065493979092, -0.007105808890653188, -0.21820214970196708, 0.1495340978360962, 0.09282850526579492, 0.16779692719819134, 0.13039116539501103, -0.0906228584216737, -0.0722013812515592, -0.02226967345735871, 0.10329923868434218, 0.09555919370874902, -0.08846074936191248, -0.25836779302956736, -0.14884231015068192, -0.12380814173750501, 0.0243001139683681, 0.19536671571940925, -0.026603240514962136, 0.2359529886345828, -0.005645159369689659, -0.0600044043864441, 0.04320382622824999, -0.04455324921290385, 0.0066769314993287854, -0.21213801619978737, 0.02137673717707208, -0.2717309921033867, -0.019716688061592685, -0.12348042950838355, -0.024369731259689317, -0.19320732471058238, -0.1860819148793141, 0.002208264604862474, 0.05278265111108441, -0.13235903353314943, 0.03605898281800085, 0.30892792533663993, 0.10107349742389934, -0.0331533310217501, -0.11667619785191062, 0.032493380009152945, 0.07272747650279135, 0.03658671694475689, -0.09530621818741347, 0.3260127378988613, 0.03345301656703861, -0.1585693146946784, -0.03830278112093807, -0.17331149677749666, -0.18279785352524755, -0.23784394910027978, 0.03146660066784776, -0.04105763328105034, 0.14233199434778315, 0.24158290659348453, 0.010491762009179742, -0.0715971666071665, -0.18718702316679817, -0.20602078779277894, -0.004337706594894443, -0.06794405430565649, -0.0009146706077369643, -0.33104588121664125, 0.019595072851305406, -0.10094983718878874, 0.037861665072503714, -0.08393048944473327, -0.1662500273955333, 0.05176011429175709, -0.03407993829434279, -0.04270530690796667, 0.03639903109769235, 0.07493380974954644, -0.06822287720016594, -0.23241805287054385, 0.3075617613942441, 0.19828245820278703, 0.028630345444352626, 0.15138798835444262, 0.05075728709309636, 0.041705958264399, 0.08818589759518386, -0.2406410659977947, 0.02427101370491258, -0.048436778949461155, -0.0663588573442288, 0.16461622242279333, -0.03329604237288745, 0.025196657770289357, -0.10284823929903288, 0.09050322905174028, 0.05777213931014527, -0.07093963889655315, 0.09862534801651067, 0.22174344821032174, -0.2718518169027717, -0.07282350065603695, 0.08830465065090368, 0.04244128564378805, -0.05729101950279045, -0.008106060112649307, -0.07116277885415634, -0.09855859647570833, -0.18873352739479998, -0.2790997179820295, 0.0928467006692064, 0.22701246193571217, 0.16703935590851926, -0.15726859288698736, -0.003410319796026861, -0.03747614362210609, 0.0762985309650622, 0.08737049496110871, 0.20342780684702938, -0.05672894532809183, 0.10438712978978437, -0.09795290254306127, 0.11342303883094838, -0.22432209654215418, -0.21906152754330654, -0.03007868538998823, 0.09035554184461224, -0.17983411860435228, 0.03607250782180473, -0.17157004288313438, -0.24149328171880613, -0.04528259661809606, -0.2429852613225381, -0.10864113362483173, -0.20359445166600765, 0.06839331383648357, -0.019121454612476337, -0.20186976854434274, -0.3526686711244793, 0.0046323859665662916, -0.10378405729325008, -0.17762734069932237, 0.048526786775675124, 0.2800300502298908, -0.09838897111832451, -0.20194235374439692, 0.060976300759167865, 0.17545566235157822, -0.19451889337483713, 0.0400525526901111, 0.05517121186756875, 0.01720791998656729, -0.2999108203084225, 0.07218450995364739, 0.031600629868189636, 0.10757202062408139, -0.384431152495075, -0.10081607041750848, -0.04864781605670686, 0.2099301226775137, 0.1298384356209378, -0.11645977924350842, -0.1019253565023013, 0.1850531348975448, -0.07420176654799716, -0.16055449239747366, 0.03815629864386627, 0.07877490170183499, -0.14977203973335212, -0.21365704087776982, -0.11469719759724763, 0.19312618051307517, 0.21968598341593334, -0.05505328217934809, -0.1683894072955911, 0.32683536599541285, 0.12355924280633752, 0.11692367813400484, 0.022090911405266145, 0.1291521226765207, -0.052022074042667774, 0.17464787965669565, 0.11388862353648416, 0.005635188023113032, -0.02439309396880232, -0.03081641391472556, 0.07322624329525135, -0.19560572950378863, -0.015291408610889352, 0.10979993739049783, -0.027354615855649352, 0.07764736580316868, -0.025224351982247567, 0.019132570293653804, -0.06440143888215966, -0.011058253832745394, 0.007102807623636178, 0.04611311734008147, -0.3870222089979817, -0.1117367667523983, -0.035693168390222706, 0.1216974074955227, 0.00796590106657638, -0.06973766361675081, 0.22875650993210614, -0.07340173281532245];
//const c = [];

const model = new rw.HostedModel({
  url: "https://small-set-d2c1757e.hosted-models.runwayml.cloud/v1/",
  token: "65h7gLm/hgM7zOv6f6vosg==",
});

let amt = 0.0;
let angle = 0;

function setup() {
  createCanvas(1024, 1024);
  for (let i = 0; i < 1024; i++) {
    n[i] = new NoiseLoop(20, -1, 1);
  }
  generateRainbow();

}


async function generateRainbow() {
  // httpPost(path, [datatype], [data], [callback], [errorCallback])
  const path = "http://localhost:8000/query";
  for (let i = 0; i < 512; i++) {
    //c[i] = lerp(a[i], b[i], amt);
    //    a[i] += random(-0.01, 0.01);
    a[i] = n[i].value(angle); //randomGaussian() / 50.0;
    //c[i] += randomGaussian() / 10;
  }
  amt += 0.05;
  let da = TWO_PI / (24*60);
  angle += da;

  const data = {
    z: a,
    truncation: 0.5
  };
  
  const inputs = {
    "z": a,
    "truncation": 0.5
  };
  
  //httpPost(path, 'json', data, gotImage, gotError);
  
  if (typeof(model) != "undefined") {
    const result = await model.query(inputs);
    gotImage(result);
  }
}

function gotError(error) {
  console.error(error);
}


function gotImage(result) {
  rainbow = createImg(result.image, imageReady);
  //rainbow.size(128, 128);
  rainbow.hide();
}

let count = 0;

function imageReady() {
  image(rainbow, 0, 0);
  save(`rainbow${nf(count, 4)}`);
  count++;
  if (angle <= TWO_PI) {
    setTimeout(generateRainbow, 500);
  }
}

const osn = new OpenSimplexNoise(Date.now());


class NoiseLoop {
  constructor(diameter, min, max) {
    this.diameter = diameter;
    this.min = min;
    this.max = max;
    this.cx = random(1000);
    this.cy = random(1000);
  }

  value(a) {
    let xoff = map(cos(a), -1, 1, this.cx, this.cx + this.diameter);
    let yoff = map(sin(a), -1, 1, this.cy, this.cy + this.diameter);
    let r = osn.noise2D(xoff, yoff);
    return map(r, -1, 1, this.min, this.max);
  }
}