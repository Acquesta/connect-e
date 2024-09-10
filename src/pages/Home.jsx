import SectionImage from "../components/sectionImage";
import sobreBg from '../assets/image/sobreImg.png'
import Section from "../components/section";

function Home() {
    return ( 
        <>
            <SectionImage
                src={sobreBg}
            />
            <Section
                titulo={'Afinal, o que vamos solucionar?'}
                texto={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit, diam id rutrum efficitur, ligula lacus fermentum mauris, eget euismod lectus ligula sit amet mauris. Suspendisse vel lorem nec diam facilisis gravida. Nam interdum erat sed eros blandit auctor. Nullam fermentum, neque et pretium cursus, enim mauris venenatis dolor, ac iaculis quam velit quis neque. Morbi luctus nec leo id elementum. Nulla et luctus risus. Suspendisse faucibus vestibulum sodales. Donec fermentum dui mi, vel tempor nulla tincidunt vel. Duis mollis neque ut augue luctus malesuada. Nulla efficitur lorem rhoncus, tristique nibh sed, bibendum nulla. Proin non mattis dolor.Nullam varius mauris ac commodo eleifend. Proin vulputate elit a ullamcorper vestibulum. Nunc congue tincidunt nisi, non molestie augue commodo quis. Nam tempus mi eu quam semper pulvinar. Ut non tellus ut risus aliquam rutrum. Nulla facilisi. Nullam et lobortis risus. Etiam malesuada pellentesque quam, non ultricies sapien pharetra vel. Etiam eget imperdiet erat. Aliquam semper aliquam nulla, quis feugiat enim iaculis a. In egestas est nec lectus ultrices, vel pellentesque arcu mattis. Phasellus justo nisl, posuere et nisi sit amet, mattis auctor leo.'}
            />
            <Section
                titulo={'Nossa solução'}
                texto={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit, diam id rutrum efficitur, ligula lacus fermentum mauris, eget euismod lectus ligula sit amet mauris. Suspendisse vel lorem nec diam facilisis gravida. Nam interdum erat sed eros blandit auctor. Nullam fermentum, neque et pretium cursus, enim mauris venenatis dolor, ac iaculis quam velit quis neque. Morbi luctus nec leo id elementum. Nulla et luctus risus. Suspendisse faucibus vestibulum sodales. Donec fermentum dui mi, vel tempor nulla tincidunt vel. Duis mollis neque ut augue luctus malesuada. Nulla efficitur lorem rhoncus, tristique nibh sed, bibendum nulla. Proin non mattis dolor.Nullam varius mauris ac commodo eleifend. Proin vulputate elit a ullamcorper vestibulum. Nunc congue tincidunt nisi, non molestie augue commodo quis. Nam tempus mi eu quam semper pulvinar. Ut non tellus ut risus aliquam rutrum. Nulla facilisi. Nullam et lobortis risus. Etiam malesuada pellentesque quam, non ultricies sapien pharetra vel. Etiam eget imperdiet erat. Aliquam semper aliquam nulla, quis feugiat enim iaculis a. In egestas est nec lectus ultrices, vel pellentesque arcu mattis. Phasellus justo nisl, posuere et nisi sit amet, mattis auctor leo.'}
                color = {true}
            />
            <Section
                titulo={'Por que faremos isso?'}
                texto={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit, diam id rutrum efficitur, ligula lacus fermentum mauris, eget euismod lectus ligula sit amet mauris. Suspendisse vel lorem nec diam facilisis gravida. Nam interdum erat sed eros blandit auctor. Nullam fermentum, neque et pretium cursus, enim mauris venenatis dolor, ac iaculis quam velit quis neque. Morbi luctus nec leo id elementum. Nulla et luctus risus. Suspendisse faucibus vestibulum sodales. Donec fermentum dui mi, vel tempor nulla tincidunt vel. Duis mollis neque ut augue luctus malesuada. Nulla efficitur lorem rhoncus, tristique nibh sed, bibendum nulla. Proin non mattis dolor.Nullam varius mauris ac commodo eleifend. Proin vulputate elit a ullamcorper vestibulum. Nunc congue tincidunt nisi, non molestie augue commodo quis. Nam tempus mi eu quam semper pulvinar. Ut non tellus ut risus aliquam rutrum. Nulla facilisi. Nullam et lobortis risus. Etiam malesuada pellentesque quam, non ultricies sapien pharetra vel. Etiam eget imperdiet erat. Aliquam semper aliquam nulla, quis feugiat enim iaculis a. In egestas est nec lectus ultrices, vel pellentesque arcu mattis. Phasellus justo nisl, posuere et nisi sit amet, mattis auctor leo.'}
            />
        </>
     );
}

export default Home;