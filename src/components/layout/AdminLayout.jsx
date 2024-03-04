import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';

const AdminLayout = () => {
  return (
    <>
      <header>
        <Navbar fluid rounded style={{backgroundColor:"gray"}}>
          <Navbar.Brand href="https://flowbite-react.com">
            <img src="https://flowbite.s3.amazonaws.com/brand/logo-dark/mark/flowbite-logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Navbar Ejemplo</span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User settings" img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRUYGBgZGBgZGBoYGBgYGBwZGBgZGRgYGRgcIS4lHB4rHxoYJjgmKy8xNTU2GiU7QDszPy40NTEBDAwMEA8QHxISHjQrJCs0NDQ0NDQ0NDQ2NDQ9NDQ0NDQ0NDQ0NDQ0NDQ0NDE9NjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAQkAvgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAABAAIDBAUGB//EAEAQAAIBAgMFBQUGBAYCAwEAAAECEQADBBIhBTFBUWEiMnGBkQYTobHRQlJicsHwFIKS4RUjU6Ky8TOTY8LSNP/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACsRAAICAgIBAwMDBQEAAAAAAAABAhEDIRIxQQQiUWFxoTJCsQUzkdHwE//aAAwDAQACEQMRAD8A83akKTUlogDSinotHLQsNDKQpxWlFazUKlNOtWmdsqKWPIfvStVNjhRN24q/hXU+v/dLKSXZXHhnk6X+jIk1NawlxtymOZ0HxrUtrh017RPMgE+Q4VZTGIftEeI+lSlll+1Hbh9FB/3Jr7JmamyX4uB4SfpUv+Ef/I3p/etKeWo5jdUdy8q95gPEgVL/ANZtnoL0Xpoq3+WUG2UeFw+Y/vUL7OuDc2bwYg/Grr7Rt/e9AfpUX+Ip94+hplLJ/wAjnyYfSdJpfZmXdDroSw8SaYbz/eb+o1uJiUfSVPQx8jVXF7MG9NPwnd5HhVI5VdSVHJk9Hrljdr8mb/EP99/6j9aX8S/33/qb60CkaHQ0wirWcDTRJ/FXPvv/AFt9acMbc/1H/rb61BFCsAtDHXf9W5/W/wBaP+IXv9W5/wCx/rVUGjNYxcG0r2731z/2P8daX+JX/wDXu/8Atf8A/VU6INYw1qS0WooKJkiRakApqJUwFI2VjEaVqfCYMueSggE8ZO5V5k0xELEKN5IA8608S4SETcoInmx0ZqSUmujpw4Yy90ul+RXMQttclsAcyN/rx8f2Mq5eJ40brzUMUIx8sOXK26WkvA7NQJNORD++dS3reUdd/wClG9iKLcbHYbGMu4+I4HxFRY6wO+ndPeB1Knx4ik1rQEUbDgdltx0Pgf3NBadodtyjwl14+hRoGn3EKkg7wSPSmVY4Wq0Gp7GKddx05HUVEooVnFNbGjOUXcXRqq6XRB7LcP3xrOv2ypIIg1GDVxbnvFyt3x3G+9+E9anXH7F3JZVT7/kpGhRahVDmFFCjQrADRFCjRMIVIopgFSoKVjRRPaFE0EpxpGXXRc2WvbLfdUx4mFHzqHFN2j41LgHgt1Kf8qrYhe035qn+46esKr5IYk1YSz2h0E+dWLWGEHrHwM1O6gEdfpQlPwiuP0zrlIhFsIoneNfOs978njwG6d0/U102H2A99A+cKrZo0nccv6N+zpYwfse50YgrM94xPON1GOtsnmbb4x0jm7TSE8f0/wCqiv2dV8ga3dobFNojj2m3Dhr9PhWY9uWA/GPkDWumO43Hf0MvFLqDzUT4jT9KgrWxtqbKPI0cpu11XNrz41lVeO0edmjxk/8AI+3QuJBpyLqKn2i6F+xuhR6KJ+M1Xj7SZUqRm7A5z51CaQNTMTX2zdvie9+bn57/ABmoqIO+gKCVBbt2Km06hRFDNCaVKijD6ehpjCnLSsdaJ81PFVwamWlaKRZPhllj4a+oqYpLH8XzFN2bqW8v1qzct8qjN1Kj0cGPljT+pPbTQGoLsnWNFcifj+tToSQRx31DavqjkOYtvCufuMNUfyJ9CaSKtnVnfGCrrya+Dx+IzW7Fsrl0VQV6yxJ38zXoFpQFA5V5biUe2+ViwjeEMZgdRDDgR866vYdgXEztZRF+yNXY9WdtTVTzpI19rYJXWPj5EfrXE43B5sRkWAJGp0Hciu5Nyd8ACuF23jUvX/dp2gXUOeELPZHMzv5QOsZKwqTiqMjbCoh90j51QyzjczxHZ/CBpPEk9KyStdZtrZeRVaIzbtwnQQBzMA6ViWMA7uEVSXYwFjUnlFdWJXHRw5k1ItYbZxIAbskA7yNeyGAHX6isxMIxDcwCeOsRoP3wrpfeD3dqQAUL5uDEcJPQL8qbgEtw2YwSYYkfZzaRG4HSfCulxVbMop0cjloMIrVx+FyKVIEhjDcwYjXisCR4mso1zzioiNUCjSNCpgCaFGgaxhGlQo0TErCkBRIo0o9AWpgagBqda1GTLezjDHwrURZrPwK9oTx0rSt74/ufSubMvce5/T2uCvpMGIICyZkbo31j4982u4xDciOHnW9eYIrM5AgEhSVzMeACn5kVzNy6QY3jhPLlRxR1bQn9QzLlxi7TNTZmKzWwHI/yzlUsYhTqqMTw70E7oI5V0qe06W0ywmnJ1Y/0pJ9YFcJZxGUmNzCGB3EfpG/yqTKh3MB0Onx3GquOzzVldUaW1Nv3b0okop5d5vE8B0HrWp7PbHAUOe9II6RWds1LCwzug/Mwmuj2ZtUM2SwjXWggZQVQbu850AoP4RSKS3J2yx7fZP4RFiXLDKBvhQWdvADj1FcXsUXC2ZGgopaTrAAMRy5V6Auw2e1ee8we9ctOgjuIhB7CA9YJO8wK4P2ecnOqnLmtntH7JDoykdZHDmetUxOuiTVyVlvE4ZkDI5AbRmAOozLoNeOoERxrS2VYkFIEtCgtrJXKCJ4nM8A9BWdtK2dHdpd27UniuXN6lv8AbXRW8RZt2rbLmzW7qBhAOYBs7sPHSPya766t8dhVKRk+1GAYOwYcAya6BDqigcImI6Vx922V0Nd9t/EoQxVzACr2t7y73GIA3DMw3xxrgcTcliaEq42yWVKyI0qKCT+9w1NNrnJBoGjSrGBRihRomLGWmkVIRUmHwzu6oglmMAfvhx8qmW42VrNpnYKoLMTAAEk+ArqsB7LwM998giSqkSB+JzoPKfGqGNT+GIRHGeO24XUzEZSfs+FVE2k4+0T+aG+J1HlRseEYQfv2zocY+GtIfdortpBbtjxmSPKufxG0rrfbKjksIP8AbVW7ekyNPCf1qIvNag5M96jpfQazEnUk+dOB50hrRZdOE+MVmRRA4o2tDNSsIGsz++NK2nEaj4zRTNWzb2UiP2giZliRlEEHcw5cfSuy2LdCuDw3VwuzmyOGUd7TfvncI+9NdImMKkNkIYbxrBH1qcls7ce40+zvEcTH3q85x2wGsG7Ehd+i5tQTA36KQd+saacutwWKz5WBkCNenGeRrb2gFWw9xjBghTxMgqR8apjuLElFdM80I94tt3PeJSYAEhhrPQMvpWhh9msWVmEp2s4Ug5BlOrDeDugxG7WaOwmKMth1V7b3M9teK3UYhEzQcufKoOm5gedDAXWVrtwkq4DBddZJI8xAMjnFdjfwTW++zntvbRDFwugLCAOSzHzrnzWrtJkLkXEKPmILIBlPim4H8pH1rpgCSDIKb86nTThrqG6EA1DLL8EnFylrZXAypPFtB4DVj6wPWoalvvmaRuGijoN1R1JCyaul4FSo0ooiApUopUTF2tr2UH+cx4i1cy+MAfImsMNWx7N3wuItk7mJQ/zgqPiRUzqxtWjFvt2j4n51HVnadnJcdPusR8dKroRuNMiM/wBTAqmnG3T1aKkDA7qYmVRpUi60riwZFJTxrGHAU3PB5/A+opjvNBhGp/7oOgxb8Fq1egq0AwwIBjhrB4EcK9F2UisiuwLowBDkZioP3+JH4t447ia80w1su4HMjyrtvYraXurn8O7SjHsEcCTqB4n4zzo8XJHRjm0dvYwVoW7jIQJUQVMhgZGnOZqts9Q4QXe0ULJ2uKMcykVo47ZVuQUJSYOZCIJOhZlPZY9SJrASzda61vOIy5oy5SZIJBIOg0Go110rKiilqzQw2zkYO4HaDXHtkb8yElGHSUnwNcc+MF1GuGc7mHXSCy7400kMPSvTNmOBBdQhVYyqZA0gR0jdoK8txGHyYq4i7hccgdJJG/8ADVcW7sRSfIx9sFWJbNJhZkDflAI7M7oiflWPavFGlSCDoykSrDkwO8VsYjDd88Bu6z3YrINujkim1RGdqRLiMIrKblqcqxnQmWQncZ+0h4N5HrSFW8JintNmXiCrAiVZT3kYcjTtoYdEZSk5HRXUHUrMgqTxgg+UVGXYKtWioBTooijSgSIyKEU9qbRM0SCrFtyIjQjUHkeBqsDUqNSsaLo1tuWmcJiMsZ1UuOu7MOh/SsWt+3fN2wqL/wCS1myjg6MZZY4kcugrAffujpWQ+ZJtSXn+QrcjfqKlVVPGPHdUK+tT20HL9+H0p0QGXkZdDrUVWGYrodV6GR5cvCqznXTdRMJiRu/vTRrJ/wC6eJo9Ru+PgaRjLZZ2VdVXhp1EKRvDHQEjiK1sJazK6q4zq65BIBkTqp66HxHWs7Y6gXFneJ39VMGuh2Dg8+JNpsqy41Pez5tPjpHWqRk10dOOPt31s7H2O28b6ujEG4iCV3F4aS6dY3jn41rXsAlxRfRmR1kZljukbiCCCJj0rz/Y+zL5xS3bKMFS6GY6KQgeGOUmcuXeNd5Fd9gdqI4tGMnvkZQu4EBjlcefzo5IpO0IrumV9lCMys5Z3OpPTsgAcBp8a5n2g2Yz4l8kEswB1GnYQCfOfSupwtuHZpgZ4B5BgR/9fjXP7QdTcvIHAe5lQTO8qvHr3f5q2O0yrirMPa2GYWLThYW4paeeU5ZP741yTDtTXoW0MSHwltNxtJlM8ZXtg8tYiuItWe3lbQGYPjuqjd6EnFypsgx2WFjfGvyqNnLIs7wWH8sJH61obawDIqMR3lnxEkBvOqL2SqpPFZHgWNRydknFptFYCjFGlSC0MIpRTjQisagTUi1GacKxky3s/FBLiuRKg9oc1OjR1jUdQKsbewRt3DrKt2kbgwP61nCtW9i8+GUGSUOTmIglD00kfy0GVi1KLi/ujIpI5G6kDSJpjnZPmz9D8KrXEIOtS2jyMeOoqa64ZcrLlcbjwI5UTEVocaflEyvpUVhuFOxEggitRk6JRMErMmB4RW97N3g+IT+JYqIADxxQAJqI4AanlWHa1WeMevQ1NaxRC5d6mQRxk7iDwIPHjQXtOmEk/J6z7Do6BxcBzBmXXfBcnX5+dcr7SYy82I94WIy37gtwe6qOFAHoJ8TXZez+MD5ydCDB6BdK572mZHsI4US9266MN8MwJDdZ59KpjlcrDJe42/Zi4uIS4GIVoWRxEahh0rkNrXTbve8EMwuiNJ0QwT1BgDzrS2fdy3Ge1ChragA88gVjP5u15xVSxsN76vcJICFQOMw0tw4DXy601U7GvuzYubPRbblYKC2pltIzWy5DcJEg+lcCLOdk9OWgOlek2Vt3MDcQSMgIdtQWlCuYden4YrnsTg0VEYQzqGQkDsnKQyuPEM3otCL3sMXaor3rSXEKOdUQrI5ITljqYk9DXMbZw5RwpMlVAb832vjNdHiMUM8juyruY1LELm8pB9TWHtty7FzvYAnxjX4g0042rFlVMwjRFGjFczIobSingUstANFcmngHlv3VHTgackh4qxgdWKffGUfm3p/ugfzGqs0h030Bk6didSNDTTWjtEZwlyIzglo++CQ58yCfOs2igSjTHq5qRNf7VEop+TlRFGupU1Ys3QRBoLf0ysoYdf0PCoXQb13dd4rGND3UiQak2Zhz75J3Zpbqq9pvgDVGzeIro9h2vezl70wB0iW/T1NbwUxx5SSR6FsOyFsM5nusSRv3E6darbNwiYnCogbKfeMyDvaKq5lJ4SNat+zufIUYQBoZ49K0cVkwzI6oSuW67ZYAVVSTv6wBSxl8F5um0cKM9ks5Xso6rJWQTqyg+QrqNkbSGS6DAZw76d3MzHRR+UrHQVmYnZz4j/NtmLTwSs6Z1UgmOekz1rosLsf3U3JhgpUKIMadmPEwNatJqvqK2vJX2f7qxbS1vW6XBLASzDMGGm8TlA8DzrmcTiMrumQQQ4XmuZTB8dAJ61pMP4i8EDsPco7Pcy9kQ9srGvf1cfy8qGJ2coc3VzOnumZwSAZXScw4Hl41lSe+wxaVmFidnt7t3jKoRHI5gkAfOua20GQhGBUgdoHQgy2hrp9q40X0thECy76s8KESFRSTwPE6dw865TbWIzuWnMZMnfJkmfjVd8XZOUtGWaVIilXIxUwg04GmUQaUcqmnChFEU5EIoimU8VjI3NmoHtMh7yB3TqCAGXyMHzNYjrWlsq9kdW5bxzUiGHoTUGOsZXZeR06jgR5UGqdlZPlFfKKQNFTQYUJpiJcRFI4/vpTLtsqeY58DTUap0u891ExT3VvbDJEEaST8gPmDWW+UmRoOHOt3CoEyjkonxOrfEmkk9F/Tx91npew3JRTGvHXU9a08fi0CBWUMGzKQwmBuYEetYexcUBbXmV0GseJPACnYvEK6xOg0U6T1Pid9TWi0o3LZM8phzasrCNcKnLJy5gpaBvgSZHjR9nw7+9BJLhLY1YlSRqF8YUax9o+FWMHZewhF11CMOxBIcEyT1LGfhVLYVlziL/fWyVEOysk6x2ZA4F/nVl0TdUyPZduMPcgz76+7qfwKQFB8wfOap4jEMLF60urMAo8BMjTpJ8q0ds4+D2AoAgARw5CsLDYgq63AZynMeoB/Un4imTt2UjD2UcNtVHRlUnSJEHqVIPIhgwI5iobdhioJGknX0/vXQe1uHU32yLABMgEnVmJk9W3+dXLKKbO5VKIszAkmQTlOs6D9Ksl5fk5XHs4vE28rEcqhq1jjLGqhNQn2ZCJoUKU0gbGGkKUU4CiICktKKIrGLOHuRWo9sXV074XT8QGseIE+Ucqx7daeAuww1jd601WqNGXGW+jJuLrUZFdFtbZhb/MQaHvqPsk/aH4T8K591IJBEEaGlXwxpwad+AhqIf8Av16UwbqM6URCxbYFhO8kAnkJiugBlm/M3zNcwh1HiD6bq6XBvmknjJ9daSR1emfZ0Oxsf2MhPdMeQ3fvrV3BAG5miVB15SdTI4xXMYO2CwndJneNJMCRXQri0SFUQNf3/elujpq0di21VO6SedZO0duQchaBExXI432hcEonmRw86ou5cZ3bT98ayQihFGntPaOchFMA6fU/p/1QXEgSvMQPH9xWA+LQcvE6f3NQ4nGqU7MydJ4Rx306t6RpZIxW2Wr21QGZ5kllIjUSgKq3prTMDtItcyMRFzskngxBymfGB51gcJ5H503NXQ56o4ebsuY0wSOtUs1XMT2kVx+VvzDj4EQfXlVGpS3sF7Hg0abRpBrJcNZD5hmAIUsJ3HLqR07Mn+Wo2QjQiOPiOYPEdaVokMMsBpESQBPUnSPGtm1sq4AWXLk7xtuC6qdziUmI+8IMcdGjCmNQFdA2wAwdjntBBLrkN4gbpTKQeUq8EAzJAMQWdm2brBbD3MxOUe8QHO3QW5K+Bnx5a0FJvoyrdXsNbZoI0WYzHQTyH3j0FW72zfdEoFFx1MMzmLYbQQiA5rmugY6H7pGtQthL2Yu5LkKQG7qKo72WYAHAAAaSeINOmJJG3s/EhlAnUbj06jkeVZftHs8z70DQxmjdwAYfAEcDHOlhXirO08WVtpHF2kHcQFUEEcjJo5FqymKTknFvXZy9AVavYWe3b7S8R9pOhH61XdCCAf3wpLFlFoAOo/fGt/AXRA8KwORqxhsQVpZKymGXF7OmzhRvqjiMUW3t86ovtBaqXcaT3RHz/tSqLZ0SzRrRovi1URHl/aq2J2q7aAAAbuPnynxqgTTTTKKOeWWTHZidSZO81Ij6HoZ9dKiZY89aVs6xzEU6JjlOhFCaLLHpTTWAWcM+jIdzAR+ZdVP/ACH81V3Wkhqa7rrzreAkANGhFGgEkw9rO6rMSYJ5DifSa6jGYFMqXLaQyKCzLfS2yhGKKWLpB0UEEmSCN43cqrFSGG8GRW7gMRIRiGAUOshigzOuQOQo7UOwOZSCDv0Gq+Q0qO82Vcs4hLN13Ufw7gEjtqVc5AmYjQB8q5o3CdMwNSYSJuvft5FOZQGD3EVwcoRgDL8O93tMsAgVzOztoZ7jpfEJDKChdM9skhhAeGBUB5A+wx30zAYy+l1jdfOhRkPbB94uUhBlnzk7gIpJPjaMti9ocU5AQsjZj/l5Iw7Ed1iqvIGoIAmSHPKss7NRbfZDKxRnYSG7SFCA7CNSGMLEcRxLaOFbM5JAyB84gMA0ENlGU72SSV4xu5Ze0MUwhMsMFyHMQ5gKVMPA1JM9ndHUgPH4QZR4/qHYG3MVJ7TqqZEEyAfMGZPTXh1qTZadgty/6rL21jM5IO9HYA81J/SKpl8I2CljlJ96SMtLhVsykg8xVnEv70Bho6iGAG8D7Q+lUqerkEEGCNxFLQqk0q8CZ5zddR4z9JqLfUr66xB6bvIcKjYVhRBaIFICiDFYIZprNRoGsYIFIb55a1Izc48gB8qZFYxJc5jcdRUZopqCOWo8ONJqwACrRtdhW55vUHUehHrVUVp4Eh7Tp9pHDj8rAI3xCetMgryZrCm1YuJBqIrQaAmI1o7KvgHKUD8gdZUwXWN2uVT5azWaTSDUozOovYU5FZHtZQ7lfeSCS5EsXyiGDOoGp1A10qymy8Qi9rKWUxcz3UZDmBKAhdTIBMGdRXPYbbOISIusQPsvDr/S8itW57W4goUVbSZozkW1JMCBAYEAAdKLjaoEZcXZddAgRmZC6LkTIpynMQxkhRmC5JBB3ydIrEftuSo0/UkljpzYmi+OvOIe45HLMQv9I0q7s+yBqdFGp+lPGPHbA7nKl5LmUJZYcSrE+mn76+FchfeSTzrex2PDq0cj6aiufep3ydnTmUYxUY9IjozQo0xzD7Z1qR2g1CKcxrGFdOvlTJppNOVaBghedPS2x7qsfAE/KkAa0cPtTEquRL7qo3AGB8KF0Mot9FE4d+KP/S30qMDWCP0rRm62rO7H85+tU7qEHXXXWhyTGeKUVbRXJg09udMfU0V3UyJimp8JdyODw3HwOh+vlUMUaJjUxOHgmqDprWhgbha2Q32SAD05eVVL6a1TTVk+nRUNICnZactukURnIaoqxbSaKWau2LFUUROQMOmu6m7RxmmRdw1bqeXgKm2jc92uUd9vgPrWLNJN+C0XxX3JBd3zyioJotSApDN2I6UKRpURWGgxpTQNAIAKcRSFKaxi3hLcknlVo2QOE+JihhGAUAanj40+5u1OlQk3Z6GOEVBMjS6FBjnVa60/vpRDamoWbU08URnNtURs1Jd3mKYaKmqHMPNI02aJNEBo7LZiXUbioJ5AqdD8TUeIJmhsd4uAcGDA+ET8wKsYxO1VYr2iSeysFqfDWSWAio1rTwHeFNFbJ2XsJsVnMIpJidOAG8k8BVXH4m3Z7KOrv+EhlWObDQnoPOtHav8A/Je8E/5CuMO4UMsqdIpGCJLjl2LHUnnTQmhNFt4pi7vWuey4GApk0m30hRRNioUjSomFTlFCnLSsKEycqZUzbqiNZBkh9tyDIMVZTEA9+qS1NY76/mHzFZxRo5HHolxCspIZSp5EEGOGhqqzVr7T/wDCn53+dYzVkGUmwURQoiiIE0ppNQrGNHYUe+UNuYMvmylV+JFae0MIRBjpWJs3/wAqfnT/AJCux2xuHj9arj3ZLJ4P/9k=" rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Alan Yagami</span>
                <span className="block truncate text-sm font-medium">alancindragon10@utez.edu.mx</span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="#" active>
              Home
            </Navbar.Link>
            <Navbar.Link href="#">About</Navbar.Link>
            <Navbar.Link href="#">Services</Navbar.Link>
            <Navbar.Link href="#">Pricing</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </header>

      <main className="flex h-screen">
        <aside>
          <Sidebar aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <li>
                  <Link to={"dashboard"} className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <HiChartPie className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"/>
                  <span className="px-3 flex-1 whitespace-nowrap">
                    Dashboard
                  </span>
                  </Link>
                </li>
                <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
                  <Sidebar.Item href="#">Products</Sidebar.Item>
                  <Sidebar.Item href="#">Sales</Sidebar.Item>
                  <Sidebar.Item href="#">Refunds</Sidebar.Item>
                  <Sidebar.Item href="#">Shipping</Sidebar.Item>
                </Sidebar.Collapse>
                <li>
                  <Link to={"dashboard"} className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <HiUser className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"/>
                  <span className="px-3 flex-1 whitespace-nowrap">
                    Usuarios
                  </span>
                  </Link>
                </li>
                <li>
                  <Link to={"dashboard"} className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <HiShoppingBag className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"/>
                  <span className="px-3 flex-1 whitespace-nowrap">
                    Productos
                  </span>
                  </Link>
                </li>
                <Sidebar.Item href="#" icon={HiInbox}>
                  Inbox
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiArrowSmRight}>
                  Sign In
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiTable}>
                  Sign Up
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </aside>
        <section className="w-full">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default AdminLayout;
