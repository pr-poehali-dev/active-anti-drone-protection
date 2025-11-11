import { useEffect, useState } from 'react';

interface Drone {
  id: number;
  x: number;
  y: number;
  speed: number;
  angle: number;
}

interface Missile {
  id: number;
  x: number;
  y: number;
  targetId: number;
}

export default function InterceptionAnimation() {
  const [drones, setDrones] = useState<Drone[]>([]);
  const [missiles, setMissiles] = useState<Missile[]>([]);
  const [intercepted, setIntercepted] = useState<number[]>([]);
  const [radarAngle, setRadarAngle] = useState(0);

  useEffect(() => {
    const droneInterval = setInterval(() => {
      if (drones.length < 3) {
        const newDrone: Drone = {
          id: Date.now(),
          x: Math.random() * 100,
          y: -5,
          speed: 0.3 + Math.random() * 0.5,
          angle: Math.random() * 360
        };
        setDrones(prev => [...prev, newDrone]);
        
        setTimeout(() => {
          const missile: Missile = {
            id: Date.now(),
            x: 50,
            y: 100,
            targetId: newDrone.id
          };
          setMissiles(prev => [...prev, missile]);
        }, 1000);
      }
    }, 3000);

    const radarInterval = setInterval(() => {
      setRadarAngle(prev => (prev + 2) % 360);
    }, 30);

    const animationInterval = setInterval(() => {
      setDrones(prev => prev.map(drone => ({
        ...drone,
        y: drone.y + drone.speed
      })).filter(drone => drone.y < 105 && !intercepted.includes(drone.id)));

      setMissiles(prev => {
        const updated = prev.map(missile => {
          const target = drones.find(d => d.id === missile.targetId);
          if (!target) return missile;
          
          const dx = target.x - missile.x;
          const dy = target.y - missile.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 3) {
            setIntercepted(prev => [...prev, missile.targetId]);
            return null;
          }
          
          const speed = 2;
          return {
            ...missile,
            x: missile.x + (dx / distance) * speed,
            y: missile.y + (dy / distance) * speed
          };
        }).filter(Boolean) as Missile[];
        
        return updated;
      });
    }, 50);

    return () => {
      clearInterval(droneInterval);
      clearInterval(animationInterval);
      clearInterval(radarInterval);
    };
  }, [drones, intercepted]);

  return (
    <div className="relative w-full h-[500px] bg-card/30 rounded-lg border border-primary/30 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <radialGradient id="radarGlow">
            <stop offset="0%" stopColor="rgb(74, 92, 58)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(74, 92, 58)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="missileTrail" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(249, 115, 22)" stopOpacity="0" />
            <stop offset="100%" stopColor="rgb(249, 115, 22)" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        <circle cx="50%" cy="100%" r="45%" fill="url(#radarGlow)" className="radar-pulse" />
        
        <line
          x1="50%"
          y1="100%"
          x2={`${50 + Math.cos((radarAngle * Math.PI) / 180) * 45}%`}
          y2={`${100 + Math.sin((radarAngle * Math.PI) / 180) * 45}%`}
          stroke="rgb(74, 92, 58)"
          strokeWidth="2"
          opacity="0.5"
        />

        {Array.from({ length: 3 }).map((_, i) => (
          <circle
            key={i}
            cx="50%"
            cy="100%"
            r={`${(i + 1) * 15}%`}
            fill="none"
            stroke="rgb(74, 92, 58)"
            strokeWidth="1"
            opacity="0.2"
          />
        ))}

        {drones.map(drone => (
          <g key={drone.id}>
            <circle
              cx={`${drone.x}%`}
              cy={`${drone.y}%`}
              r="8"
              fill="rgb(234, 56, 76)"
              className="threat-blink"
            />
            <circle
              cx={`${drone.x}%`}
              cy={`${drone.y}%`}
              r="12"
              fill="none"
              stroke="rgb(234, 56, 76)"
              strokeWidth="2"
              opacity="0.5"
            />
            <text
              x={`${drone.x}%`}
              y={`${drone.y - 3}%`}
              textAnchor="middle"
              fill="rgb(234, 56, 76)"
              fontSize="10"
              fontFamily="Roboto Mono, monospace"
            >
              ⚠
            </text>
          </g>
        ))}

        {missiles.map(missile => (
          <g key={missile.id}>
            <line
              x1={`${missile.x}%`}
              y1={`${missile.y}%`}
              x2={`${missile.x}%`}
              y2={`${missile.y + 5}%`}
              stroke="url(#missileTrail)"
              strokeWidth="3"
            />
            <circle
              cx={`${missile.x}%`}
              cy={`${missile.y}%`}
              r="4"
              fill="rgb(249, 115, 22)"
            />
          </g>
        ))}

        {intercepted.map((id, index) => {
          const drone = drones.find(d => d.id === id);
          if (!drone) return null;
          return (
            <g key={id}>
              <circle
                cx={`${drone.x}%`}
                cy={`${drone.y}%`}
                r="15"
                fill="rgb(249, 115, 22)"
                opacity="0.6"
                className="animate-ping"
              />
              <text
                x={`${drone.x}%`}
                y={`${drone.y + 1}%`}
                textAnchor="middle"
                fill="rgb(249, 115, 22)"
                fontSize="20"
                fontFamily="Roboto Mono, monospace"
              >
                ✓
              </text>
            </g>
          );
        })}

        <circle
          cx="50%"
          cy="100%"
          r="10"
          fill="rgb(74, 92, 58)"
        />
        <text
          x="50%"
          y="103%"
          textAnchor="middle"
          fill="white"
          fontSize="12"
          fontFamily="Roboto Mono, monospace"
        >
          🛡
        </text>
      </svg>

      <div className="absolute top-4 left-4 bg-card/90 backdrop-blur p-3 rounded border border-primary/30 font-mono text-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-primary font-bold">СИСТЕМА АКТИВНА</span>
        </div>
        <div className="space-y-1 text-xs text-muted-foreground">
          <div>Угроз обнаружено: {drones.length}</div>
          <div>Перехвачено: {intercepted.length}</div>
          <div>Ракет в полете: {missiles.length}</div>
        </div>
      </div>
    </div>
  );
}
