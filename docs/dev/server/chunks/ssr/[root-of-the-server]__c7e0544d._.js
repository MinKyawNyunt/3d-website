module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$useAnimations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/useAnimations.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Progress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Progress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$cannon$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/cannon/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Robot({ targetPosition, onCollision }) {
    const robotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const gltf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"])('/3d-website/robot.glb');
    const { actions, names } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$useAnimations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimations"])(gltf.animations, robotRef);
    const [currentTarget, setCurrentTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [canMove, setCanMove] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(4);
    const collisionCooldown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const velocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
    const previousPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0));
    const [staticCollision, setStaticCollision] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const blinkCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isBlinking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const originalMaterials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (gltf.scene) {
            gltf.scene.traverse((child)=>{
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                    // Store original material properties
                    if (child.material) {
                        originalMaterials.current.set(child, {
                            emissive: child.material.emissive ? child.material.emissive.clone() : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0x000000),
                            emissiveIntensity: child.material.emissiveIntensity || 0
                        });
                    }
                }
            });
            // Mark the robot for collision detection
            gltf.scene.userData.isRobot = true;
        }
    }, [
        gltf.scene
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (names.length > 0 && actions[names[0]]) {
            actions[names[0]].play();
        }
    }, [
        actions,
        names
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (targetPosition) {
            setCurrentTarget(targetPosition);
        }
    }, [
        targetPosition
    ]);
    // Blink red effect when colliding with static objects
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (staticCollision && !isBlinking.current) {
            isBlinking.current = true;
            blinkCount.current = 0;
            const interval = setInterval(()=>{
                if (gltf.scene) {
                    gltf.scene.traverse((child)=>{
                        if (child.isMesh && child.material) {
                            const shouldBeRed = blinkCount.current % 2 === 0;
                            if (shouldBeRed) {
                                child.material.emissive = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0xff0000);
                                child.material.emissiveIntensity = 1;
                            } else {
                                const original = originalMaterials.current.get(child);
                                if (original) {
                                    child.material.emissive = original.emissive.clone();
                                    child.material.emissiveIntensity = original.emissiveIntensity;
                                }
                            }
                            child.material.needsUpdate = true;
                        }
                    });
                }
                blinkCount.current++;
                if (blinkCount.current >= 4) {
                    // Reset to original
                    if (gltf.scene) {
                        gltf.scene.traverse((child)=>{
                            if (child.isMesh && child.material) {
                                const original = originalMaterials.current.get(child);
                                if (original) {
                                    child.material.emissive = original.emissive.clone();
                                    child.material.emissiveIntensity = original.emissiveIntensity;
                                    child.material.needsUpdate = true;
                                }
                            }
                        });
                    }
                    clearInterval(interval);
                    isBlinking.current = false;
                    setStaticCollision(false);
                }
            }, 200); // Blink every 200ms
            return ()=>clearInterval(interval);
        }
    }, [
        staticCollision,
        gltf.scene
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((state, delta)=>{
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
            const targetPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](currentTarget.x, currentPos.y, currentTarget.z);
            const distance = currentPos.distanceTo(targetPos);
            if (distance > 1) {
                // Calculate direction to target
                const direction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]().subVectors(targetPos, currentPos).normalize();
                // Calculate new position
                const moveSpeed = 0.1;
                const newX = currentPos.x + direction.x * moveSpeed;
                const newZ = currentPos.z + direction.z * moveSpeed;
                // Check collision with static objects before moving
                const robotBox = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box3"]().setFromObject(robotRef.current);
                robotBox.translate(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](newX - currentPos.x, 0, newZ - currentPos.z));
                const scene = robotRef.current.parent;
                let hasCollision = false;
                // Check collision with static objects
                scene.traverse((child)=>{
                    if (child.userData.isStatic && child.visible) {
                        const staticBox = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box3"]().setFromObject(child);
                        if (robotBox.intersectsBox(staticBox)) {
                            hasCollision = true;
                            if (!isBlinking.current) {
                                setStaticCollision(true);
                            }
                        }
                    }
                });
                // Only move forward if no collision, otherwise reverse without rotating
                if (!hasCollision && canMove) {
                    // Rotate robot to face target when moving forward
                    const targetAngle = Math.atan2(direction.x, direction.z) + Math.PI / 2;
                    robotRef.current.rotation.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].lerp(robotRef.current.rotation.y, targetAngle, 0.1);
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
                    setTimeout(()=>setCanMove(true), 1000);
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
    });
    // Collision detection with boxes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])(()=>{
        if (robotRef.current && collisionCooldown.current <= 0) {
            const robotBox = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box3"]().setFromObject(robotRef.current);
            const scene = robotRef.current.parent;
            scene.traverse((child)=>{
                if (child.userData.isBox && child.visible) {
                    const box = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box3"]().setFromObject(child);
                    if (robotBox.intersectsBox(box)) {
                        // Use robot's velocity direction for push (direction robot is moving)
                        let pushDirection;
                        const velocityMagnitude = Math.sqrt(velocity.current.x * velocity.current.x + velocity.current.z * velocity.current.z);
                        if (velocityMagnitude > 0.1) {
                            // Robot is moving - use velocity direction
                            pushDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](velocity.current.x, 0, velocity.current.z).normalize();
                        } else {
                            // Robot is stationary - use position difference as fallback
                            const robotPos = robotRef.current.position;
                            const boxPos = child.position;
                            pushDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]().subVectors(boxPos, robotPos).normalize();
                        }
                        // Trigger collision effect
                        // setScale(3.5);
                        collisionCooldown.current = 0.1;
                        if (onCollision) {
                            onCollision(child.userData.boxId, {
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
            });
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
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
        lineNumber: 250,
        columnNumber: 10
    }, this);
}
function ModelLoader({ gltf_url, scale, position, rotation = [
    0,
    0,
    0
], collisionSize, collisionOffset, castShadow = true, receiveShadow = true }) {
    const gltf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGLTF"])(gltf_url);
    const modelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const { actions, names } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$useAnimations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimations"])(gltf.animations, modelRef);
    const [ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$cannon$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBox"])(()=>({
            type: 'Static',
            position: position,
            args: collisionSize,
            material: {
                friction: 1,
                restitution: 0.3
            }
        }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (gltf.scene) {
            gltf.scene.traverse((child)=>{
                if (child.isMesh) {
                    child.castShadow = castShadow;
                    child.receiveShadow = receiveShadow;
                }
            });
        }
    }, [
        gltf.scene
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (ref.current) {
            ref.current.userData.isStatic = true;
        }
    }, [
        ref
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (names.length > 0 && actions[names[0]]) {
            actions[names[0]].play();
        }
    }, [
        actions,
        names
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: ref,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
            ref: modelRef,
            object: gltf.scene,
            scale: scale,
            position: [
                0,
                0,
                0
            ],
            rotation: rotation
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 292,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 291,
        columnNumber: 5
    }, this);
}
function Ground({ onGroundClick }) {
    const [ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$cannon$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlane"])(()=>({
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
            // material: {
            //   friction: 0.5,
            //   restitution: 0.3,
            // },
            collisionFilterGroup: 1,
            collisionFilterMask: -1
        }));
    const handleClick = (event)=>{
        event.stopPropagation();
        if (onGroundClick) {
            onGroundClick(event.point);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
            ref: ref,
            receiveShadow: true,
            onClick: handleClick,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                    args: [
                        40,
                        40
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 324,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                    transparent: true,
                    opacity: 0.2
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 325,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 323,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
function Lights() {
    const directionalLightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    // useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1);
    // useEffect(() => {
    //   if (directionalLightRef.current && directionalLightRef.current.shadow && directionalLightRef.current.shadow.camera) {
    //     const helper = new THREE.CameraHelper(directionalLightRef.current.shadow.camera);
    //     const light = directionalLightRef.current;
    //     if (light.parent) {
    //       light.parent.add(helper);
    //     }
    //     return () => {
    //       if (light.parent) {
    //         light.parent.remove(helper);
    //       }
    //     };
    //   }
    // }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                intensity: 1
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 360,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                ref: directionalLightRef,
                position: [
                    50,
                    50,
                    30
                ],
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
                lineNumber: 361,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function BoxComponent({ boxId, position, onHit, pushDirection, velocity, texture_url, onClick }) {
    const [ref, api] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$cannon$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBox"])(()=>({
            mass: 1,
            position: position,
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
        }));
    const [color, setColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("#D9CFC7");
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const boxPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(position);
    const texture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTexture"])(texture_url);
    const handleClick = (event)=>{
        event.stopPropagation();
        if (onClick) {
            onClick(boxId, boxPosition.current);
        }
    };
    const handlePointerOver = (event)=>{
        event.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
    };
    const handlePointerOut = (event)=>{
        event.stopPropagation();
        setHovered(false);
        document.body.style.cursor = 'default';
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (ref.current) {
            ref.current.userData.isBox = true;
            ref.current.userData.boxId = boxId;
        }
    }, [
        ref,
        boxId
    ]);
    // Subscribe to position updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsubscribe = api.position.subscribe((pos)=>{
            boxPosition.current = pos;
        });
        return unsubscribe;
    }, [
        api
    ]);
    // Check if box is outside ground bounds and reset if fallen
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])(()=>{
        const [x, y, z] = boxPosition.current;
        const groundSize = 20; // Ground is 40x40, so +/- 20 from center
        // Reset box if it has fallen too far below ground
        if (y < -10) {
            api.position.set(position[0], position[1], position[2]);
            api.velocity.set(0, 0, 0);
            api.angularVelocity.set(0, 0, 0);
            api.collisionFilterMask.set(-1);
            return;
        }
        // If box is outside ground bounds, stop colliding with ground
        if (Math.abs(x) > groundSize || Math.abs(z) > groundSize) {
            // Box is outside ground - only collide with other boxes (group 2)
            api.collisionFilterMask.set(2);
        } else if (y < 5) {
            // Box is on ground and within bounds - collide with everything
            api.collisionFilterMask.set(-1);
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (onHit) {
            // setColor("#FF6B6B");
            // Calculate realistic force based on robot's velocity
            const robotMass = 1;
            const boxMass = 1;
            let impulseX, impulseY, impulseZ;
            if (pushDirection && velocity) {
                const velocityMagnitude = Math.sqrt(velocity.x * velocity.x + velocity.z * velocity.z);
                // Momentum transfer: F = (m1 * v1) / m2
                const forceMagnitude = robotMass * velocityMagnitude / boxMass;
                const clampedForce = Math.max(Math.min(forceMagnitude, 5), 3); // Min 3, max 10
                // Apply horizontal push force (no upward component for realistic push)
                impulseX = pushDirection.x * clampedForce;
                impulseZ = pushDirection.z * clampedForce;
                impulseY = 0; // No vertical force - pure horizontal push
            } else {
                // Fallback with random direction if data is missing
                impulseX = (Math.random() - 0.5) * 6;
                impulseY = 0;
                impulseZ = (Math.random() - 0.5) * 6;
            }
            api.applyImpulse([
                impulseX,
                impulseY,
                impulseZ
            ], [
                0,
                0,
                0
            ]);
            setTimeout(()=>{
            // setColor("#D9CFC7");
            }, 300);
        }
    }, [
        onHit,
        pushDirection,
        velocity,
        api
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
            ref: ref,
            castShadow: true,
            receiveShadow: true,
            onClick: handleClick,
            onPointerOver: handlePointerOver,
            onPointerOut: handlePointerOut,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                    args: [
                        2,
                        2,
                        2
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 500,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                    map: texture,
                    color: hovered ? "#FFFFFF" : color,
                    roughness: hovered ? 0.2 : 0,
                    emissive: hovered ? "#444444" : "#000000",
                    emissiveIntensity: hovered ? 0.3 : 0,
                    needsUpdate: true
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 501,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 492,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
function LoadingScreen() {
    const { active, progress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Progress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProgress"])();
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!active && progress === 100) {
            const timer = setTimeout(()=>{
                setShow(false);
            }, 500);
            return ()=>clearTimeout(timer);
        }
    }, [
        active,
        progress
    ]);
    if (!show) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 text-white text-2xl",
                    style: {
                        fontFamily: 'Nevera-Regular, sans-serif'
                    },
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 532,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-64 h-2 bg-gray-800 rounded-full overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full bg-white transition-all duration-300",
                        style: {
                            width: `${progress}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 536,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 535,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2 text-white text-sm",
                    children: [
                        Math.round(progress),
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 541,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 531,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 530,
        columnNumber: 5
    }, this);
}
function Home() {
    const [targetPosition, setTargetPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [boxHits, setBoxHits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [clickedBox, setClickedBox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Hi Traveler! My name is MIN. The Creator of this website. PRESS ON GROUND to MOVE robot. SCROLL or DRUG to move camera. Have fun!');
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleGroundClick = (point)=>{
        setTargetPosition({
            x: point.x,
            z: point.z
        });
        setClickedBox(null);
        setDisplayedText('');
    };
    const handleCollision = (boxId, pushDirection, velocity)=>{
        setBoxHits((prev)=>({
                ...prev,
                [boxId]: {
                    timestamp: Date.now(),
                    direction: pushDirection,
                    velocity: velocity
                }
            }));
    };
    const handleBoxClick = (text, position)=>{
        setClickedBox(text);
        setDisplayedText('');
        setIsTyping(true);
        if (position) {
            setTargetPosition({
                x: position[0],
                z: position[2]
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (clickedBox && isTyping) {
            if (displayedText.length < clickedBox.length) {
                const timeout = setTimeout(()=>{
                    setDisplayedText(clickedBox.slice(0, displayedText.length + 1));
                }, 20); // Typing speed: 50ms per character
                return ()=>clearTimeout(timeout);
            } else {
                setIsTyping(false);
            }
        }
    }, [
        clickedBox,
        displayedText,
        isTyping
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "canvas-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingScreen, {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 597,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                camera: {
                    position: [
                        20,
                        10,
                        0
                    ]
                },
                style: {
                    backgroundImage: 'url("/3d-website/img/galaxy.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                },
                shadows: true,
                gl: {
                    toneMapping: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"],
                    toneMappingExposure: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$cannon$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Physics"], {
                        gravity: [
                            0,
                            -9.81,
                            0
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Lights, {}, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 615,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Robot, {
                                targetPosition: targetPosition,
                                onCollision: handleCollision
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 619,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ModelLoader, {
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
                                lineNumber: 629,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ModelLoader, {
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
                                // castShadow={false}
                                receiveShadow: false
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 638,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Ground, {
                                onGroundClick: handleGroundClick
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 649,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BoxComponent, {
                                boxId: "box1",
                                position: [
                                    -8,
                                    10,
                                    -8
                                ],
                                onHit: boxHits['box1']?.timestamp,
                                pushDirection: boxHits['box1']?.direction,
                                velocity: boxHits['box1']?.velocity,
                                texture_url: "/3d-website/img/laravel.png",
                                onClick: (boxId, pos)=>handleBoxClick('Proficient in PHP, Laravel and Yii2 framework with over 8 years of professional experience, specializing in building nationwide ERP systems and fintech solutions.', pos)
                            }, "box1", false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 651,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BoxComponent, {
                                boxId: "box2",
                                position: [
                                    8,
                                    10,
                                    -8
                                ],
                                onHit: boxHits['box2']?.timestamp,
                                pushDirection: boxHits['box2']?.direction,
                                velocity: boxHits['box2']?.velocity,
                                texture_url: "/3d-website/img/mysql.png",
                                onClick: (boxId, pos)=>handleBoxClick('Have experience working with big data, handling millions of records using SQL, and also skilled in NoSQL databases.', pos)
                            }, "box2", false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 662,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BoxComponent, {
                                boxId: "box3",
                                position: [
                                    -8,
                                    10,
                                    8
                                ],
                                onHit: boxHits['box3']?.timestamp,
                                pushDirection: boxHits['box3']?.direction,
                                velocity: boxHits['box3']?.velocity,
                                texture_url: "/3d-website/img/nginx.png",
                                onClick: (boxId, pos)=>handleBoxClick('Have hands-on experience deploying and managing servers on both on-premise systems and cloud services such as AWS and Digital Ocean.', pos)
                            }, "box3", false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 673,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BoxComponent, {
                                boxId: "box4",
                                position: [
                                    8,
                                    10,
                                    8
                                ],
                                onHit: boxHits['box4']?.timestamp,
                                pushDirection: boxHits['box4']?.direction,
                                velocity: boxHits['box4']?.velocity,
                                texture_url: "/3d-website/img/react.png",
                                onClick: (boxId, pos)=>handleBoxClick('Have skilled in frontend development using Javascript and related frameworks, including React React Native and Next.js.', pos)
                            }, "box4", false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 684,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 614,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrbitControls"], {
                        enableRotate: true,
                        enablePan: false,
                        minPolarAngle: Math.atan2(Math.sqrt(20 * 20 + 0 * 0), 10),
                        maxPolarAngle: Math.atan2(Math.sqrt(20 * 20 + 0 * 0), 10)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 700,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 600,
                columnNumber: 7
            }, this),
            clickedBox && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[10%] left-1/2 -translate-x-1/2 bg-white/[0.07] text-white shadow-[0_4px_30px_rgba(0,0,0,0.23)] backdrop-blur-[20px] border border-white/[0.14] z-[1000] p-2.5 text-center max-w-[90vw] md:max-w-[600px]",
                style: {
                    fontFamily: 'Organix, sans-serif'
                },
                children: [
                    displayedText,
                    isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "animate-pulse",
                        children: "|"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 714,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 709,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "https://www.linkedin.com/in/min-kyaw-nyunt/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "fixed bottom-6 right-6 bg-white/[0.07] text-white shadow-[0_4px_30px_rgba(0,0,0,0.23)] backdrop-blur-[20px] border border-white/[0.14] px-6 py-3 rounded-lg hover:bg-white/[0.12] transition-all duration-300 z-[1000]",
                style: {
                    fontFamily: 'Organix, sans-serif'
                },
                children: "Contact Me"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 718,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 596,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c7e0544d._.js.map