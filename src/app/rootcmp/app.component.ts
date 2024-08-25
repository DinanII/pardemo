import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  MoveDirection,
  OutMode,
  Engine,
  Container
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { loadFull } from "tsparticles";
import { NgParticlesService } from "@tsparticles/angular";
import { NgxParticlesModule } from "@tsparticles/angular";
import { ISourceOptions } from '@tsparticles/engine';
import config from './config.json'
import { BasecardComponent } from '../components/ui/basecard/basecard.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxParticlesModule,BasecardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  id = "tsparticles";

  particlesOptions: ISourceOptions = 
  {
    background: {
      color: {
        value: "#2e2c2c"
      }
    },
    fpsLimit: 120,
    interactivity: {
      // events: {
      //   onClick: {
      //     enable: true,
      //     mode: "push"
      //   },
      //   onHover: {
      //     enable: true,
      //     mode: "repulse"
      //   },
      //   resize: {
      //     enable: true 
      //   }
      // },
      modes: {
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#ffffff"
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      move: {
        direction: MoveDirection.none, 
        enable: true,
        outModes: {
          default: OutMode.bounce
        },
        random: false,
        speed: 3,
        straight: false
      },
      number: {
        density: {
          enable: true,
        },
        value: 160
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        value: {
          min: 1,
          max: 5
        }
      }
    },
    detectRetina: true
  };

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
    
    async function particlesInit(engine: Engine): Promise<void> {
      await loadFull(engine);
    }
    this.ngParticlesService.init(async (engine: Engine) => {
      console.log(engine);
      //await loadSlim(engine);
      await loadFull(engine)
    });
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }
}
