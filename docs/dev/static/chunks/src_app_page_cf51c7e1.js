(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$useAnimations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/useAnimations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Progress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Progress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$cannon$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/cannon/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Robot({ targetPosition, onCollision }) {
    _s();
    const robotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const gltf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"])('/3d-website/robot.glb');
    const { actions, names } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$useAnimations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimations"])(gltf.animations, robotRef);
    const [currentTarget, setCurrentTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [canMove, setCanMove] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(4);
    const collisionCooldown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const velocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    const previousPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0));
    const [staticCollision, setStaticCollision] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const blinkCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isBlinking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const originalMaterials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Robot.useEffect": ()=>{
            if (gltf.scene) {
                gltf.scene.traverse({
                    "Robot.useEffect": (child)=>{
                        if (child.isMesh) {
                            child.castShadow = true;
                            child.receiveShadow = true;
                            // Store original material properties
                            if (child.material) {
                                originalMaterials.current.set(child, {
                                    emissive: child.material.emissive ? child.material.emissive.clone() : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x000000),
                                    emissiveIntensity: child.material.emissiveIntensity || 0
                                });
                            }
                        }
                    }
                }["Robot.useEffect"]);
                // Mark the robot for collision detection
                gltf.scene.userData.isRobot = true;
            }
        }
    }["Robot.useEffect"], [
        gltf.scene
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Robot.useEffect": ()=>{
            if (names.length > 0 && actions[names[0]]) {
                actions[names[0]].play();
            }
        }
    }["Robot.useEffect"], [
        actions,
        names
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Robot.useEffect": ()=>{
            if (targetPosition) {
                setCurrentTarget(targetPosition);
            }
        }
    }["Robot.useEffect"], [
        targetPosition
    ]);
    // Blink red effect when colliding with static objects
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Robot.useEffect": ()=>{
            if (staticCollision && !isBlinking.current) {
                isBlinking.current = true;
                blinkCount.current = 0;
                const interval = setInterval({
                    "Robot.useEffect.interval": ()=>{
                        if (gltf.scene) {
                            gltf.scene.traverse({
                                "Robot.useEffect.interval": (child_0)=>{
                                    if (child_0.isMesh && child_0.material) {
                                        const shouldBeRed = blinkCount.current % 2 === 0;
                                        if (shouldBeRed) {
                                            child_0.material.emissive = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xff0000);
                                            child_0.material.emissiveIntensity = 1;
                                        } else {
                                            const original = originalMaterials.current.get(child_0);
                                            if (original) {
                                                child_0.material.emissive = original.emissive.clone();
                                                child_0.material.emissiveIntensity = original.emissiveIntensity;
                                            }
                                        }
                                        child_0.material.needsUpdate = true;
                                    }
                                }
                            }["Robot.useEffect.interval"]);
                        }
                        blinkCount.current++;
                        if (blinkCount.current >= 4) {
                            // 2 blinks = 4 toggles
                            // Reset to original
                            if (gltf.scene) {
                                gltf.scene.traverse({
                                    "Robot.useEffect.interval": (child_1)=>{
                                        if (child_1.isMesh && child_1.material) {
                                            const original_0 = originalMaterials.current.get(child_1);
                                            if (original_0) {
                                                child_1.material.emissive = original_0.emissive.clone();
                                                child_1.material.emissiveIntensity = original_0.emissiveIntensity;
                                                child_1.material.needsUpdate = true;
                                            }
                                        }
                                    }
                                }["Robot.useEffect.interval"]);
                            }
                            clearInterval(interval);
                            isBlinking.current = false;
                            setStaticCollision(false);
                        }
                    }
                }["Robot.useEffect.interval"], 200); // Blink every 200ms
                return ({
                    "Robot.useEffect": ()=>clearInterval(interval)
                })["Robot.useEffect"];
            }
        }
    }["Robot.useEffect"], [
        staticCollision,
        gltf.scene
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Robot.useFrame": (state, delta)=>{
            // Handle collision cooldown
            if (collisionCooldown.current > 0) {
                collisionCooldown.current -= delta;
            }
            // Smooth scale animation back to normal
            // if (scale !== 4) {
            //   setScale(prev => THREE.MathUtils.lerp(prev, 4, 0.1));
            // }
            if (robotRef.current && currentTarget) {
                const currentPos = robotRef.current.position;
                const targetPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](currentTarget.x, currentPos.y, currentTarget.z);
                const distance = currentPos.distanceTo(targetPos);
                if (distance > 1) {
                    // Calculate direction to target
                    const direction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().subVectors(targetPos, currentPos).normalize();
                    // Calculate new position
                    const moveSpeed = 0.1;
                    const newX = currentPos.x + direction.x * moveSpeed;
                    const newZ = currentPos.z + direction.z * moveSpeed;
                    // Check collision with static objects before moving
                    const robotBox = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box3"]().setFromObject(robotRef.current);
                    robotBox.translate(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](newX - currentPos.x, 0, newZ - currentPos.z));
                    const scene = robotRef.current.parent;
                    let hasCollision = false;
                    // Check collision with static objects
                    scene.traverse({
                        "Robot.useFrame": (child_2)=>{
                            if (child_2.userData.isStatic && child_2.visible) {
                                const staticBox = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box3"]().setFromObject(child_2);
                                if (robotBox.intersectsBox(staticBox)) {
                                    hasCollision = true;
                                    if (!isBlinking.current) {
                                        setStaticCollision(true);
                                    }
                                }
                            }
                        }
                    }["Robot.useFrame"]);
                    // Only move forward if no collision, otherwise reverse without rotating
                    if (!hasCollision && canMove) {
                        // Rotate robot to face target when moving forward
                        const targetAngle = Math.atan2(direction.x, direction.z) + Math.PI / 2;
                        robotRef.current.rotation.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(robotRef.current.rotation.y, targetAngle, 0.1);
                        currentPos.x = newX;
                        currentPos.z = newZ;
                    } else if (hasCollision && canMove) {
                        // Reverse robot position without rotating
                        setCanMove(false);
                        const reverseDistance = 5;
                        const reverseX = currentPos.x - direction.x * reverseDistance;
                        const reverseZ = currentPos.z - direction.z * reverseDistance;
                        // Set new target to reverse position
                        setCurrentTarget({
                            x: reverseX,
                            z: reverseZ
                        });
                        setTimeout({
                            "Robot.useFrame": ()=>setCanMove(true)
                        }["Robot.useFrame"], 1000);
                    } else if (!canMove) {
                        // Moving backward - don't rotate
                        currentPos.x = newX;
                        currentPos.z = newZ;
                    }
                    // Calculate velocity for collision physics
                    velocity.current.subVectors(currentPos, previousPosition.current).divideScalar(delta);
                    previousPosition.current.copy(currentPos);
                } else {
                    setCurrentTarget(null);
                    velocity.current.set(0, 0, 0);
                }
            } else if (robotRef.current) {
                // Reset velocity when not moving
                velocity.current.set(0, 0, 0);
                previousPosition.current.copy(robotRef.current.position);
            }
        }
    }["Robot.useFrame"]);
    // Collision detection with boxes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Robot.useFrame": ()=>{
            if (robotRef.current && collisionCooldown.current <= 0) {
                const robotBox_0 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box3"]().setFromObject(robotRef.current);
                const scene_0 = robotRef.current.parent;
                scene_0.traverse({
                    "Robot.useFrame": (child_3)=>{
                        if (child_3.userData.isBox && child_3.visible) {
                            const box = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box3"]().setFromObject(child_3);
                            if (robotBox_0.intersectsBox(box)) {
                                // Use robot's velocity direction for push (direction robot is moving)
                                let pushDirection;
                                const velocityMagnitude = Math.sqrt(velocity.current.x * velocity.current.x + velocity.current.z * velocity.current.z);
                                if (velocityMagnitude > 0.1) {
                                    // Robot is moving - use velocity direction
                                    pushDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](velocity.current.x, 0, velocity.current.z).normalize();
                                } else {
                                    // Robot is stationary - use position difference as fallback
                                    const robotPos = robotRef.current.position;
                                    const boxPos = child_3.position;
                                    pushDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]().subVectors(boxPos, robotPos).normalize();
                                }
                                // Trigger collision effect
                                // setScale(3.5);
                                collisionCooldown.current = 0.1;
                                if (onCollision) {
                                    onCollision(child_3.userData.boxId, {
                                        x: pushDirection.x,
                                        y: pushDirection.y,
                                        z: pushDirection.z
                                    }, {
                                        x: velocity.current.x,
                                        y: velocity.current.y,
                                        z: velocity.current.z
                                    });
                                }
                            }
                        }
                    }
                }["Robot.useFrame"]);
            }
        }
    }["Robot.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
        ref: robotRef,
        object: gltf.scene,
        position: [
            10,
            1,
            0
        ],
        scale: scale
    }, void 0, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 233,
        columnNumber: 10
    }, this);
}
_s(Robot, "25rEN+f/Q/J96plqvyVad9Slv9E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$useAnimations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = Robot;
function ModelLoader(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "4fdf10393a7361cb81b59eebaaa439bfe4946ed5d33021cadc19a9599b0960e8") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4fdf10393a7361cb81b59eebaaa439bfe4946ed5d33021cadc19a9599b0960e8";
    }
    const { gltf_url, scale, position, rotation: t1, collisionSize, castShadow: t2, receiveShadow: t3 } = t0;
    let t4;
    if ($[1] !== t1) {
        t4 = t1 === undefined ? [
            0,
            0,
            0
        ] : t1;
        $[1] = t1;
        $[2] = t4;
    } else {
        t4 = $[2];
    }
    const rotation = t4;
    const castShadow = t2 === undefined ? true : t2;
    const receiveShadow = t3 === undefined ? true : t3;
    const gltf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"])(gltf_url);
    const modelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const { actions, names } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$useAnimations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimations"])(gltf.animations, modelRef);
    let t5;
    if ($[3] !== collisionSize || $[4] !== position) {
        t5 = ({
            "ModelLoader[useBox()]": ()=>({
                    type: "Static",
                    position,
                    args: collisionSize,
                    material: {
                        friction: 1,
                        restitution: 0.3
                    }
                })
        })["ModelLoader[useBox()]"];
        $[3] = collisionSize;
        $[4] = position;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    const [ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$cannon$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBox"])(t5);
    let t6;
    if ($[6] !== castShadow || $[7] !== gltf.scene || $[8] !== receiveShadow) {
        t6 = ({
            "ModelLoader[useEffect()]": ()=>{
                if (gltf.scene) {
                    gltf.scene.traverse({
                        "ModelLoader[useEffect() > gltf.scene.traverse()]": (child)=>{
                            if (child.isMesh) {
                                child.castShadow = castShadow;
                                child.receiveShadow = receiveShadow;
                            }
                        }
                    }["ModelLoader[useEffect() > gltf.scene.traverse()]"]);
                }
            }
        })["ModelLoader[useEffect()]"];
        $[6] = castShadow;
        $[7] = gltf.scene;
        $[8] = receiveShadow;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== gltf.scene) {
        t7 = [
            gltf.scene
        ];
        $[10] = gltf.scene;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    let t9;
    if ($[12] !== ref) {
        t8 = ({
            "ModelLoader[useEffect()]": ()=>{
                if (ref.current) {
                    ref.current.userData.isStatic = true;
                }
            }
        })["ModelLoader[useEffect()]"];
        t9 = [
            ref
        ];
        $[12] = ref;
        $[13] = t8;
        $[14] = t9;
    } else {
        t8 = $[13];
        t9 = $[14];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t8, t9);
    let t10;
    if ($[15] !== actions || $[16] !== names[0] || $[17] !== names.length) {
        t10 = ({
            "ModelLoader[useEffect()]": ()=>{
                if (names.length > 0 && actions[names[0]]) {
                    actions[names[0]].play();
                }
            }
        })["ModelLoader[useEffect()]"];
        $[15] = actions;
        $[16] = names[0];
        $[17] = names.length;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== actions || $[20] !== names) {
        t11 = [
            actions,
            names
        ];
        $[19] = actions;
        $[20] = names;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t10, t11);
    let t12;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = [
            0,
            0,
            0
        ];
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== gltf.scene || $[24] !== rotation || $[25] !== scale) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
            ref: modelRef,
            object: gltf.scene,
            scale: scale,
            position: t12,
            rotation: rotation
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 375,
            columnNumber: 11
        }, this);
        $[23] = gltf.scene;
        $[24] = rotation;
        $[25] = scale;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== ref || $[28] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            ref: ref,
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 385,
            columnNumber: 11
        }, this);
        $[27] = ref;
        $[28] = t13;
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    return t14;
}
_s1(ModelLoader, "JXen9EFk9/InQXwNePMphczZ5aQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$useAnimations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$cannon$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBox"]
    ];
});
_c1 = ModelLoader;
function Ground(t0) {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "4fdf10393a7361cb81b59eebaaa439bfe4946ed5d33021cadc19a9599b0960e8") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4fdf10393a7361cb81b59eebaaa439bfe4946ed5d33021cadc19a9599b0960e8";
    }
    const { onGroundClick } = t0;
    const [ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$cannon$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlane"])(_GroundUsePlane);
    let t1;
    if ($[1] !== onGroundClick) {
        t1 = ({
            "Ground[handleClick]": (event)=>{
                event.stopPropagation();
                if (onGroundClick) {
                    onGroundClick(event.point);
                }
            }
        })["Ground[handleClick]"];
        $[1] = onGroundClick;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleClick = t1;
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
            args: [
                40,
                40
            ]
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 425,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
            transparent: true,
            opacity: 0.2
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 426,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] !== handleClick || $[6] !== ref) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: ref,
                receiveShadow: true,
                onClick: handleClick,
                children: [
                    t2,
                    t3
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 435,
                columnNumber: 12
            }, this)
        }, void 0, false);
        $[5] = handleClick;
        $[6] = ref;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    return t4;
}
_s2(Ground, "ZXiOMq8W1xHEoXd0svPT/ZkHa4A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$cannon$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlane"]
    ];
});
_c2 = Ground;
function _GroundUsePlane() {
    return {
        rotation: [
            -Math.PI / 2,
            0,
            0
        ],
        position: [
            0,
            0,
            0
        ],
        collisionFilterGroup: 1,
        collisionFilterMask: -1
    };
}
function Lights() {
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "4fdf10393a7361cb81b59eebaaa439bfe4946ed5d33021cadc19a9599b0960e8") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4fdf10393a7361cb81b59eebaaa439bfe4946ed5d33021cadc19a9599b0960e8";
    }
    const directionalLightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
            intensity: 1
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 463,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            50,
            50,
            30
        ];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    ref: directionalLightRef,
                    position: t1,
                    intensity: 5,
                    castShadow: true,
                    "shadow-mapSize": [
                        2048,
                        2048
                    ],
                    "shadow-camera-left": -30,
                    "shadow-camera-right": 30,
                    "shadow-camera-top": 20,
                    "shadow-camera-bottom": -20,
                    "shadow-camera-near": 0.5,
                    "shadow-camera-far": 200
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 477,
                    columnNumber: 16
                }, this)
            ]
        }, void 0, true);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_s3(Lights, "QNPwq9PVV+aSVrZPNwRTZDV9ric=");
_c3 = Lights;
function BoxComponent(t0) {
    _s4();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "4fdf10393a7361cb81b59eebaaa439bfe4946ed5d33021cadc19a9599b0960e8") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4fdf10393a7361cb81b59eebaaa439bfe4946ed5d33021cadc19a9599b0960e8";
    }
    const { boxId, position, onHit, pushDirection, velocity, texture_url, onClick } = t0;
    let t1;
    if ($[1] !== position) {
        t1 = ({
            "BoxComponent[useBox()]": ()=>({
                    mass: 1,
                    position,
                    args: [
                        2,
                        2,
                        2
                    ],
                    material: {
                        friction: 1
                    },
                    collisionFilterGroup: 2,
                    collisionFilterMask: -1
                })
        })["BoxComponent[useBox()]"];
        $[1] = position;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [ref, api] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$cannon$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBox"])(t1);
    const [color] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#D9CFC7");
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const boxPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(position);
    const texture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTexture"])(texture_url);
    let t2;
    if ($[3] !== boxId || $[4] !== onClick) {
        t2 = ({
            "BoxComponent[handleClick]": (event)=>{
                event.stopPropagation();
                if (onClick) {
                    onClick(boxId, boxPosition.current);
                }
            }
        })["BoxComponent[handleClick]"];
        $[3] = boxId;
        $[4] = onClick;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const handleClick = t2;
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "BoxComponent[handlePointerOver]": (event_0)=>{
                event_0.stopPropagation();
                setHovered(true);
                document.body.style.cursor = "pointer";
            }
        })["BoxComponent[handlePointerOver]"];
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const handlePointerOver = t3;
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "BoxComponent[handlePointerOut]": (event_1)=>{
                event_1.stopPropagation();
                setHovered(false);
                document.body.style.cursor = "default";
            }
        })["BoxComponent[handlePointerOut]"];
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const handlePointerOut = t4;
    let t5;
    let t6;
    if ($[8] !== boxId || $[9] !== ref) {
        t5 = ({
            "BoxComponent[useEffect()]": ()=>{
                if (ref.current) {
                    ref.current.userData.isBox = true;
                    ref.current.userData.boxId = boxId;
                }
            }
        })["BoxComponent[useEffect()]"];
        t6 = [
            ref,
            boxId
        ];
        $[8] = boxId;
        $[9] = ref;
        $[10] = t5;
        $[11] = t6;
    } else {
        t5 = $[10];
        t6 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    if ($[12] !== api.position) {
        t7 = ({
            "BoxComponent[useEffect()]": ()=>{
                const unsubscribe = api.position.subscribe({
                    "BoxComponent[useEffect() > api.position.subscribe()]": (pos)=>{
                        boxPosition.current = pos;
                    }
                }["BoxComponent[useEffect() > api.position.subscribe()]"]);
                return unsubscribe;
            }
        })["BoxComponent[useEffect()]"];
        $[12] = api.position;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== api) {
        t8 = [
            api
        ];
        $[14] = api;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t9;
    if ($[16] !== api.angularVelocity || $[17] !== api.collisionFilterMask || $[18] !== api.position || $[19] !== api.velocity || $[20] !== position) {
        t9 = ({
            "BoxComponent[useFrame()]": ()=>{
                const [x, y, z] = boxPosition.current;
                if (y < -10) {
                    api.position.set(position[0], position[1], position[2]);
                    api.velocity.set(0, 0, 0);
                    api.angularVelocity.set(0, 0, 0);
                    api.collisionFilterMask.set(-1);
                    return;
                }
                if (Math.abs(x) > 20 || Math.abs(z) > 20) {
                    api.collisionFilterMask.set(2);
                } else {
                    if (y < 5) {
                        api.collisionFilterMask.set(-1);
                    }
                }
            }
        })["BoxComponent[useFrame()]"];
        $[16] = api.angularVelocity;
        $[17] = api.collisionFilterMask;
        $[18] = api.position;
        $[19] = api.velocity;
        $[20] = position;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])(t9);
    let t10;
    let t11;
    if ($[22] !== api || $[23] !== onHit || $[24] !== pushDirection || $[25] !== velocity) {
        t10 = ({
            "BoxComponent[useEffect()]": ()=>{
                if (onHit) {
                    let impulseX;
                    let impulseZ;
                    if (pushDirection && velocity) {
                        const velocityMagnitude = Math.sqrt(velocity.x * velocity.x + velocity.z * velocity.z);
                        const forceMagnitude = 1 * velocityMagnitude / 1;
                        const clampedForce = Math.max(Math.min(forceMagnitude, 5), 3);
                        impulseX = pushDirection.x * clampedForce;
                        impulseZ = pushDirection.z * clampedForce;
                    } else {
                        impulseX = (Math.random() - 0.5) * 6;
                        impulseZ = (Math.random() - 0.5) * 6;
                    }
                    api.applyImpulse([
                        impulseX,
                        0,
                        impulseZ
                    ], [
                        0,
                        0,
                        0
                    ]);
                    setTimeout(_BoxComponentUseEffectSetTimeout, 300);
                }
            }
        })["BoxComponent[useEffect()]"];
        t11 = [
            onHit,
            pushDirection,
            velocity,
            api
        ];
        $[22] = api;
        $[23] = onHit;
        $[24] = pushDirection;
        $[25] = velocity;
        $[26] = t10;
        $[27] = t11;
    } else {
        t10 = $[26];
        t11 = $[27];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t10, t11);
    let t12;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
            args: [
                2,
                2,
                2
            ]
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 685,
            columnNumber: 11
        }, this);
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    const t13 = hovered ? "#FFFFFF" : color;
    const t14 = hovered ? 0.2 : 0;
    const t15 = hovered ? "#444444" : "#000000";
    const t16 = hovered ? 0.3 : 0;
    let t17;
    if ($[29] !== t13 || $[30] !== t14 || $[31] !== t15 || $[32] !== t16 || $[33] !== texture) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
            map: texture,
            color: t13,
            roughness: t14,
            emissive: t15,
            emissiveIntensity: t16,
            needsUpdate: true
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 696,
            columnNumber: 11
        }, this);
        $[29] = t13;
        $[30] = t14;
        $[31] = t15;
        $[32] = t16;
        $[33] = texture;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] !== handleClick || $[36] !== ref || $[37] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: ref,
                castShadow: true,
                receiveShadow: true,
                onClick: handleClick,
                onPointerOver: handlePointerOver,
                onPointerOut: handlePointerOut,
                children: [
                    t12,
                    t17
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 708,
                columnNumber: 13
            }, this)
        }, void 0, false);
        $[35] = handleClick;
        $[36] = ref;
        $[37] = t17;
        $[38] = t18;
    } else {
        t18 = $[38];
    }
    return t18;
}
_s4(BoxComponent, "55D91dSivhVzregUyrTTR94GTZw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$cannon$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBox"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTexture"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c4 = BoxComponent;
function _BoxComponentUseEffectSetTimeout() {}
function LoadingScreen() {
    _s5();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "4fdf10393a7361cb81b59eebaaa439bfe4946ed5d33021cadc19a9599b0960e8") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4fdf10393a7361cb81b59eebaaa439bfe4946ed5d33021cadc19a9599b0960e8";
    }
    const { active, progress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Progress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgress"])();
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t0;
    let t1;
    if ($[1] !== active || $[2] !== progress) {
        t0 = ({
            "LoadingScreen[useEffect()]": ()=>{
                if (!active && progress === 100) {
                    const timer = setTimeout({
                        "LoadingScreen[useEffect() > setTimeout()]": ()=>{
                            setShow(false);
                        }
                    }["LoadingScreen[useEffect() > setTimeout()]"], 500);
                    return ()=>clearTimeout(timer);
                }
            }
        })["LoadingScreen[useEffect()]"];
        t1 = [
            active,
            progress
        ];
        $[1] = active;
        $[2] = progress;
        $[3] = t0;
        $[4] = t1;
    } else {
        t0 = $[3];
        t1 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    if (!show) {
        return null;
    }
    let t2;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 text-white text-2xl",
            style: {
                fontFamily: "Nevera-Regular, sans-serif"
            },
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 762,
            columnNumber: 10
        }, this);
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const t3 = `${progress}%`;
    let t4;
    if ($[6] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-64 h-2 bg-gray-800 rounded-full overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full bg-white transition-all duration-300",
                style: {
                    width: t3
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 772,
                columnNumber: 77
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 772,
            columnNumber: 10
        }, this);
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== progress) {
        t5 = Math.round(progress);
        $[8] = progress;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 text-white text-sm",
            children: [
                t5,
                "%"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 790,
            columnNumber: 10
        }, this);
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== t4 || $[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    t2,
                    t4,
                    t6
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 798,
                columnNumber: 92
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 798,
            columnNumber: 10
        }, this);
        $[12] = t4;
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    return t7;
}
_s5(LoadingScreen, "+9Wm9T+IDWi7SWNdeo4+fTWoP3U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Progress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgress"]
    ];
});
_c5 = LoadingScreen;
function Home() {
    _s6();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(62);
    if ($[0] !== "4fdf10393a7361cb81b59eebaaa439bfe4946ed5d33021cadc19a9599b0960e8") {
        for(let $i = 0; $i < 62; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4fdf10393a7361cb81b59eebaaa439bfe4946ed5d33021cadc19a9599b0960e8";
    }
    const [targetPosition, setTargetPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {};
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [boxHits, setBoxHits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [clickedBox, setClickedBox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Hi Traveler! My name is MIN. The Creator of this website. PRESS ON GROUND to MOVE robot. SCROLL or DRUG to move camera. Have fun!");
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Home[handleGroundClick]": (point)=>{
                setTargetPosition({
                    x: point.x,
                    z: point.z
                });
                setClickedBox(null);
                setDisplayedText("");
            }
        })["Home[handleGroundClick]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleGroundClick = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Home[handleCollision]": (boxId, pushDirection, velocity)=>{
                setBoxHits({
                    "Home[handleCollision > setBoxHits()]": (prev)=>({
                            ...prev,
                            [boxId]: {
                                timestamp: Date.now(),
                                direction: pushDirection,
                                velocity
                            }
                        })
                }["Home[handleCollision > setBoxHits()]"]);
            }
        })["Home[handleCollision]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleCollision = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "Home[handleBoxClick]": (text, position)=>{
                setClickedBox(text);
                setDisplayedText("");
                setIsTyping(true);
                if (position) {
                    setTargetPosition({
                        x: position[0],
                        z: position[2]
                    });
                }
            }
        })["Home[handleBoxClick]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handleBoxClick = t3;
    let t4;
    let t5;
    if ($[5] !== clickedBox || $[6] !== displayedText || $[7] !== isTyping) {
        t4 = ({
            "Home[useEffect()]": ()=>{
                if (clickedBox && isTyping) {
                    if (displayedText.length < clickedBox.length) {
                        const timeout = setTimeout({
                            "Home[useEffect() > setTimeout()]": ()=>{
                                setDisplayedText(clickedBox.slice(0, displayedText.length + 1));
                            }
                        }["Home[useEffect() > setTimeout()]"], 20);
                        return ()=>clearTimeout(timeout);
                    } else {
                        setIsTyping(false);
                    }
                }
            }
        })["Home[useEffect()]"];
        t5 = [
            clickedBox,
            displayedText,
            isTyping
        ];
        $[5] = clickedBox;
        $[6] = displayedText;
        $[7] = isTyping;
        $[8] = t4;
        $[9] = t5;
    } else {
        t4 = $[8];
        t5 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingScreen, {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 917,
            columnNumber: 10
        }, this);
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            position: [
                20,
                10,
                0
            ]
        };
        t8 = {
            backgroundImage: "url(\"/3d-website/img/galaxy.jpg\")",
            backgroundSize: "cover",
            backgroundPosition: "center"
        };
        $[11] = t7;
        $[12] = t8;
    } else {
        t7 = $[11];
        t8 = $[12];
    }
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            toneMapping: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"],
            toneMappingExposure: 1
        };
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    let t11;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = [
            0,
            -9.81,
            0
        ];
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Lights, {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 953,
            columnNumber: 11
        }, this);
        $[14] = t10;
        $[15] = t11;
    } else {
        t10 = $[14];
        t11 = $[15];
    }
    let t12;
    if ($[16] !== targetPosition) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Robot, {
            targetPosition: targetPosition,
            onCollision: handleCollision
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 962,
            columnNumber: 11
        }, this);
        $[16] = targetPosition;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModelLoader, {
            gltf_url: "/3d-website/pc.glb",
            scale: 1,
            position: [
                0,
                0,
                0
            ],
            collisionSize: [
                4,
                3,
                4
            ],
            collisionOffset: [
                0,
                1.5,
                0
            ],
            rotation: [
                0,
                Math.PI / 2,
                0
            ]
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 970,
            columnNumber: 11
        }, this);
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    let t14;
    let t15;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModelLoader, {
            gltf_url: "/3d-website/fish.glb",
            scale: 0.1,
            position: [
                0,
                7,
                -2.5
            ],
            collisionSize: [
                0,
                0,
                0
            ],
            collisionOffset: [
                0,
                0,
                0
            ],
            rotation: [
                0,
                Math.PI / 2,
                0
            ],
            receiveShadow: false
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 978,
            columnNumber: 11
        }, this);
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ground, {
            onGroundClick: handleGroundClick
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 979,
            columnNumber: 11
        }, this);
        $[19] = t14;
        $[20] = t15;
    } else {
        t14 = $[19];
        t15 = $[20];
    }
    let t16;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = [
            -8,
            10,
            -8
        ];
        $[21] = t16;
    } else {
        t16 = $[21];
    }
    const t17 = boxHits.box1?.timestamp;
    const t18 = boxHits.box1?.direction;
    const t19 = boxHits.box1?.velocity;
    let t20;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = ({
            "Home[<BoxComponent>.onClick]": (boxId_0, pos)=>handleBoxClick("Proficient in PHP, Laravel and Yii2 framework with over 8 years of professional experience, specializing in building nationwide ERP systems and fintech solutions.", pos)
        })["Home[<BoxComponent>.onClick]"];
        $[22] = t20;
    } else {
        t20 = $[22];
    }
    let t21;
    if ($[23] !== t17 || $[24] !== t18 || $[25] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BoxComponent, {
            boxId: "box1",
            position: t16,
            onHit: t17,
            pushDirection: t18,
            velocity: t19,
            texture_url: "/3d-website/img/laravel.png",
            onClick: t20
        }, "box1", false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1007,
            columnNumber: 11
        }, this);
        $[23] = t17;
        $[24] = t18;
        $[25] = t19;
        $[26] = t21;
    } else {
        t21 = $[26];
    }
    let t22;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = [
            8,
            10,
            -8
        ];
        $[27] = t22;
    } else {
        t22 = $[27];
    }
    const t23 = boxHits.box2?.timestamp;
    const t24 = boxHits.box2?.direction;
    const t25 = boxHits.box2?.velocity;
    let t26;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = ({
            "Home[<BoxComponent>.onClick]": (boxId_1, pos_0)=>handleBoxClick("Have experience working with big data, handling millions of records using SQL, and also skilled in NoSQL databases.", pos_0)
        })["Home[<BoxComponent>.onClick]"];
        $[28] = t26;
    } else {
        t26 = $[28];
    }
    let t27;
    if ($[29] !== t23 || $[30] !== t24 || $[31] !== t25) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BoxComponent, {
            boxId: "box2",
            position: t22,
            onHit: t23,
            pushDirection: t24,
            velocity: t25,
            texture_url: "/3d-website/img/mysql.png",
            onClick: t26
        }, "box2", false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1036,
            columnNumber: 11
        }, this);
        $[29] = t23;
        $[30] = t24;
        $[31] = t25;
        $[32] = t27;
    } else {
        t27 = $[32];
    }
    let t28;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = [
            -8,
            10,
            8
        ];
        $[33] = t28;
    } else {
        t28 = $[33];
    }
    const t29 = boxHits.box3?.timestamp;
    const t30 = boxHits.box3?.direction;
    const t31 = boxHits.box3?.velocity;
    let t32;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = ({
            "Home[<BoxComponent>.onClick]": (boxId_2, pos_1)=>handleBoxClick("Have hands-on experience deploying and managing servers on both on-premise systems and cloud services such as AWS and Digital Ocean.", pos_1)
        })["Home[<BoxComponent>.onClick]"];
        $[34] = t32;
    } else {
        t32 = $[34];
    }
    let t33;
    if ($[35] !== t29 || $[36] !== t30 || $[37] !== t31) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BoxComponent, {
            boxId: "box3",
            position: t28,
            onHit: t29,
            pushDirection: t30,
            velocity: t31,
            texture_url: "/3d-website/img/nginx.png",
            onClick: t32
        }, "box3", false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1065,
            columnNumber: 11
        }, this);
        $[35] = t29;
        $[36] = t30;
        $[37] = t31;
        $[38] = t33;
    } else {
        t33 = $[38];
    }
    let t34;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = [
            8,
            10,
            8
        ];
        $[39] = t34;
    } else {
        t34 = $[39];
    }
    const t35 = boxHits.box4?.timestamp;
    const t36 = boxHits.box4?.direction;
    const t37 = boxHits.box4?.velocity;
    let t38;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = ({
            "Home[<BoxComponent>.onClick]": (boxId_3, pos_2)=>handleBoxClick("Have skilled in frontend development using Javascript and related frameworks, including React React Native and Next.js.", pos_2)
        })["Home[<BoxComponent>.onClick]"];
        $[40] = t38;
    } else {
        t38 = $[40];
    }
    let t39;
    if ($[41] !== t35 || $[42] !== t36 || $[43] !== t37) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BoxComponent, {
            boxId: "box4",
            position: t34,
            onHit: t35,
            pushDirection: t36,
            velocity: t37,
            texture_url: "/3d-website/img/react.png",
            onClick: t38
        }, "box4", false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1094,
            columnNumber: 11
        }, this);
        $[41] = t35;
        $[42] = t36;
        $[43] = t37;
        $[44] = t39;
    } else {
        t39 = $[44];
    }
    let t40;
    if ($[45] !== t12 || $[46] !== t21 || $[47] !== t27 || $[48] !== t33 || $[49] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$cannon$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Physics"], {
            gravity: t10,
            children: [
                t11,
                t12,
                t13,
                t14,
                t15,
                t21,
                t27,
                t33,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1104,
            columnNumber: 11
        }, this);
        $[45] = t12;
        $[46] = t21;
        $[47] = t27;
        $[48] = t33;
        $[49] = t39;
        $[50] = t40;
    } else {
        t40 = $[50];
    }
    let t41;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
            enableRotate: true,
            enablePan: false,
            minPolarAngle: Math.atan2(Math.sqrt(400), 10),
            maxPolarAngle: Math.atan2(Math.sqrt(400), 10)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1116,
            columnNumber: 11
        }, this);
        $[51] = t41;
    } else {
        t41 = $[51];
    }
    let t42;
    if ($[52] !== t40) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            camera: t7,
            style: t8,
            shadows: true,
            gl: t9,
            children: [
                t40,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1123,
            columnNumber: 11
        }, this);
        $[52] = t40;
        $[53] = t42;
    } else {
        t42 = $[53];
    }
    let t43;
    if ($[54] !== clickedBox || $[55] !== displayedText || $[56] !== isTyping) {
        t43 = clickedBox && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-[10%] left-1/2 -translate-x-1/2 bg-white/[0.07] text-white shadow-[0_4px_30px_rgba(0,0,0,0.23)] backdrop-blur-[20px] border border-white/[0.14] z-[1000] p-2.5 text-center max-w-[90vw] md:max-w-[600px]",
            style: {
                fontFamily: "Organix, sans-serif"
            },
            children: [
                displayedText,
                isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "animate-pulse",
                    children: "|"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1133,
                    columnNumber: 36
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1131,
            columnNumber: 25
        }, this);
        $[54] = clickedBox;
        $[55] = displayedText;
        $[56] = isTyping;
        $[57] = t43;
    } else {
        t43 = $[57];
    }
    let t44;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "https://www.linkedin.com/in/min-kyaw-nyunt/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "fixed bottom-6 right-6 bg-white/[0.07] text-white shadow-[0_4px_30px_rgba(0,0,0,0.23)] backdrop-blur-[20px] border border-white/[0.14] px-6 py-3 rounded-lg hover:bg-white/[0.12] transition-all duration-300 z-[1000]",
            style: {
                fontFamily: "Organix, sans-serif"
            },
            children: "Contact Me"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1143,
            columnNumber: 11
        }, this);
        $[58] = t44;
    } else {
        t44 = $[58];
    }
    let t45;
    if ($[59] !== t42 || $[60] !== t43) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "canvas-container",
            children: [
                t6,
                t42,
                t43,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1152,
            columnNumber: 11
        }, this);
        $[59] = t42;
        $[60] = t43;
        $[61] = t45;
    } else {
        t45 = $[61];
    }
    return t45;
}
_s6(Home, "wBFfJ/qC8R/n7qq06l5guGof34c=");
_c6 = Home;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Robot");
__turbopack_context__.k.register(_c1, "ModelLoader");
__turbopack_context__.k.register(_c2, "Ground");
__turbopack_context__.k.register(_c3, "Lights");
__turbopack_context__.k.register(_c4, "BoxComponent");
__turbopack_context__.k.register(_c5, "LoadingScreen");
__turbopack_context__.k.register(_c6, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_page_cf51c7e1.js.map